const express = require("express");
const customerRouter = express.Router();
const {
    getCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
} = require("../controllers/customer.controller.js");

// Get all customers
customerRouter.get('/', getCustomers);

// Get customer by MongoDB ID
customerRouter.get('/id=:id', getCustomer);

// Create a new customer
customerRouter.post('/', createCustomer);

// Update a customer
customerRouter.put('/id=:id', updateCustomer);

// Delete a customer
customerRouter.delete('/id=:id', deleteCustomer);

module.exports = customerRouter;