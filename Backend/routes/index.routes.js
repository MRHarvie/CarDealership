const express = require('express');
const router = express.Router();

const carRoutes = require('./car.routes');
const customerRoutes = require('./customer.routes');
const transactionRoutes = require('./transaction.routes');

// Mount individual route handlers
router.use('/cars', carRoutes);
router.use('/customers', customerRoutes);
router.use('/transactions', transactionRoutes);

module.exports = router;