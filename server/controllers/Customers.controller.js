const customer = require('../models/Customers');
const l = require('../models/ListingsAndReviews');

const customersController = {};



// /GET all customers

customersController.getCustomers = async (req, res) =>{
    // join two colections 
    const acollection = l.collection.collectionName;
    const type = typeof acollection
    console.log(' entro aqui ' + acollection + ' y es de tipo ' + type);
    const cus = await customer.aggregate([
        {
            $lookup: {
              from: acollection,
              localField: '_id',
              foreignField:'id_customer',
              as:'Rentals'
            }
        }
    ])

//    const customers =  await customer.find({});
   res.json(cus);

} 
// /GET only one customer
customersController.getCustomer = async (req , res) =>{
    
    const getUs =  await customer.find({"_id":req.params.id})
    console.log('asi se manda ' + getUs);
    res.json(getUs);
}

customersController.getNameCustomer = async (req, res) =>{
    const getName =  await customer.find({"FirstName":req.params.FirstName });
        console.log('asi se manda con name ' + getName);
        res.json(getName);
}

customersController.getCoutryCustomer = async (req, res) =>{
    const getCountry =  await customer.find({"country":req.params.country });
        console.log('asi se manda con name ' + getCountry);
        res.json(getCountry);
}





// /POST new customer
customersController.createCustomer = async (req, res) => {
    
    const newCustomer = new customer({
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        district: req.body.district,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        status: req.body.status
    });
    await newCustomer.save();
    
    res.json({
        status: "Customer saved"
    });
}
// /PUT update user
customersController.editCustomer = async (req, res) =>{
    const {id} = req.params;
    const oneCustomer = {
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        district: req.body.district,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        status: req.body.status
    };
    await customer.findByIdAndUpdate(id, {$set: oneCustomer}, {new:true} );
    res.json({
        status: "Customer Updated"
    })
}

// /DELETE user
customersController.deleteCustomer = async (req, res) =>{
    await customer.findByIdAndRemove(req.params.id);
    res.json({
        status: "Customer Deleted"
    })
}
 
module.exports = customersController;