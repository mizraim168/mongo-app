const express = require('express');
const router = express.Router();
const customersController = require('../controllers/Customers.controller');

router.get('/:FirstName', customersController.getNameCustomer);
router.delete('/:FirstName', customersController.deleteCustomer);
module.exports = router;