const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');


autoIncrement.initialize(mongoose);

const  Schema  = mongoose.Schema;

const customers = new Schema({
    
    // _id: { type: Number},
    address: {type: String, required:true},
    city: {type: String, required:true},
    country: {type: String, required:true},
    district: {type: String, required:true},
    FirstName: {type: String, required:true},
    LastName: {type: String, required:true},
    status: {type: String, required:false}
});


// customers.plugin(autoIncrement.plugin, '_id');

customers.plugin(autoIncrement.plugin, {
    model: '_id',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('Customers', customers);