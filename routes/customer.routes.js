const express = require("express");
const customerRouter = express.Router();
const {
    getCustomers,
    getCustomer,
    getCustomerByEmail,
    getCustomerByLicense,
    createCustomer,
    updateCustomer,
    deleteCustomer
} = require("../controllers/customer.controller.js");

// Get all customers
customerRouter.get('/', getCustomers);

// Get customer by MongoDB ID
customerRouter.get('/id=:id', getCustomer);

// Get customer by email
customerRouter.get('/email=:email', getCustomerByEmail);

// Get customer by license number
customerRouter.get('/license=:licenseNumber', getCustomerByLicense);

// Create new customer
customerRouter.get('/', createCustomer);

// Update customer by ID
customerRouter.put('/id=:id', updateCustomer);

// Delete customer by ID
customerRouter.delete('/id=:id', deleteCustomer);

module.exports = customerRouter;