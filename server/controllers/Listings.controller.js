const listings = require('../models/ListingsAndReviews');

const listingsController = {};




// /GET all listenings

listingsController.getListenings = async (req, res) =>{
    const lis =  await listings.find({});
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
module.exports = listingsController;