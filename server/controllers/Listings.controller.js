const listings = require('../models/ListingsAndReviews');

const listingsController = {};




// /GET all listenings

//Part 7
listingsController.getListenings = async (req, res) =>{
    // const lis =  await listings.find({});
    // res.json(lis);

    const lis =  await listings.find({$where: "this.id_customer>0"});
    res.json(lis);
 }

//  Part 8
 listingsController.getProperty_type = async (req, res) =>{
     const lis = await listings.find({$or: [{"property_type": "House"},{"property_type": "Department"},{"property_type": "Room"}, {"property_type": "PenHouse"}]})
     res.json(lis);
 }
// Part 9
 listingsController.getByPrice = async (req, res) =>{
    const lis = await listings.find({$and: [{"price":{$gte: 80}},{"price":{$lte: 5000}}]})
    res.json(lis);
}



 // /GET only one listening
 listingsController.getListening = async (req , res) =>{
    
    const getUs =  await listings.find({"_id":req.params.id})
    console.log('asi se manda ' + getUs);
    res.json(getUs);
}

// /POST new customer
listingsController.createListening = async (req, res) => {

    const newCustomer = new listings({
        name: req.body.name,
        price: req.body.price,
        property_type: req.body.property_type,
        id_customer:req.body.id_customer
    });
    await newCustomer.save();
    
    res.json({
        status: "Customer saved"
    });
}


listingsController.editListening = async (req, res) =>{
    const {id} = req.params;
    const oneCustomer = {
        name: req.body.name,
        price: req.body.price,
        property_type: req.body.property_type,
        id_customer: req.body.id_customer

    };
    await listings.findByIdAndUpdate(id, {$set: oneCustomer}, {new:true} );
    res.json({
        status: "Listening Updated"
    })
}

// /DELETE customer by ID
listingsController.deleteListening = async (req, res) =>{
    await listings.findByIdAndRemove(req.params.id);
    res.json({
        status: "Listening Deleted"
    })
}
module.exports = listingsController;