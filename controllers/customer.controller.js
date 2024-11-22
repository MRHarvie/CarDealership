const Customer = require("../models/customer.model.js");

const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({});
        res.status(200).json(customers);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findById(id);
        if (!customer) {
            return res.status(404).json({message: "Customer not found"});
        }
        res.status(200).json(customer);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getCustomerByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const customer = await Customer.findOne({ email: email });
        if (!customer) {
            return res.status(404).json({message: "Customer not found with this email"});
        }
        res.status(200).json(customer);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getCustomerByLicense = async (req, res) => {
    try {
        const { licenseNumber } = req.params;
        const customer = await Customer.findOne({ licenseNumber: licenseNumber });
        if (!customer) {
            return res.status(404).json({message: "Customer not found with this license number"});
        }
        res.status(200).json(customer);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const createCustomer = async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findByIdAndUpdate(id, req.body);
        if (!customer) {
            return res.status(404).json({message: "Customer not found"});
        }
        const updatedCustomer = await Customer.findById(id);
        res.status(200).json(updatedCustomer);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findByIdAndDelete(id);
        if (!customer) {
            return res.status(404).json({message: "Customer not found"});
        }
        res.status(200).json({ message: "Customer deleted."});
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = {
    getCustomers,
    getCustomer,
    getCustomerByEmail,
    getCustomerByLicense,
    createCustomer,
    updateCustomer,
    deleteCustomer
};