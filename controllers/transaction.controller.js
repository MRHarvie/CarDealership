const Transaction = require("../models/transaction.model.js");

const getTransactions = async (req, res) => {
    try {
        // Populate references to get full car and customer details
        const transactions = await Transaction.find({})
            .populate('car')
            .populate('customer');
        res.status(200).json(transactions);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await Transaction.findById(id)
            .populate('car')
            .populate('customer');
        if (!transaction) {
            return res.status(404).json({message: "Transaction not found"});
        }
        res.status(200).json(transaction);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getTransactionsByCustomer = async (req, res) => {
    try {
        const { customerId } = req.params;
        const transactions = await Transaction.find({ customer: customerId })
            .populate('car')
            .populate('customer');
        res.status(200).json(transactions);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getTransactionsByCar = async (req, res) => {
    try {
        const { carId } = req.params;
        const transactions = await Transaction.find({ car: carId })
            .populate('car')
            .populate('customer');
        res.status(200).json(transactions);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const createTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body);
        const populatedTransaction = await Transaction.findById(transaction._id)
            .populate('car')
            .populate('customer');
        res.status(201).json(populatedTransaction);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await Transaction.findByIdAndUpdate(id, req.body);
        if (!transaction) {
            return res.status(404).json({message: "Transaction not found"});
        }
        const updatedTransaction = await Transaction.findById(id)
            .populate('car')
            .populate('customer');
        res.status(200).json(updatedTransaction);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await Transaction.findByIdAndDelete(id);
        if (!transaction) {
            return res.status(404).json({message: "Transaction not found"});
        }
        res.status(200).json({ message: "Transaction deleted."});
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = {
    getTransactions,
    getTransaction,
    getTransactionsByCustomer,
    getTransactionsByCar,
    createTransaction,
    updateTransaction,
    deleteTransaction
};