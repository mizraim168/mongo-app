const express = require('express');
const router = express.Router();
const customersController = require('../controllers/Customers.controller');

  
    router.get('/', customersController.getCustomers);
    router.post('/', customersController.createCustomer);
    router.get('/:id', customersController.getCustomer);
    router.put('/:id', customersController.editCustomer);
    router.delete('/:id', customersController.deleteCustomer);
    
module.exports = router;