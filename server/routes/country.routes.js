const express = require('express');
const router = express.Router();
const customersController = require('../controllers/Customers.controller');



router.get('/:country', customersController.getCoutryCustomer);


module.exports = router;