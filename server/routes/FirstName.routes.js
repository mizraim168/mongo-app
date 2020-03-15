const express = require('express');
const router = express.Router();
const customersController = require('../controllers/Customers.controller');

router.get('/:FirstName', customersController.getNameCustomer);

module.exports = router;