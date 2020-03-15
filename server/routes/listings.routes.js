const express = require('express');
const router = express.Router();
const listingsController = require('../controllers/Listings.controller');

  
    router.get('/', listingsController.getListenings);
    router.post('/', listingsController.createListening);
    router.get('/:id', listingsController.getListening);
    // router.put('/:id', listingsController.editCustomer);
    // router.delete('/:id', listingsController.deleteCustomer);
module.exports = router;