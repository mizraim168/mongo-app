const mongoose = require('mongoose');



const  Schema  = mongoose.Schema;

const listingandreviews = new Schema({
    name:  String ,
    price: Number,
    property_type: String ,
    id_customer: Number

})



// const dataModel = mongoose.model('listingsAndReviews', listingAndReviews, 'listingsAndReviews');

module.exports = mongoose.model('listingandreviews', listingandreviews);