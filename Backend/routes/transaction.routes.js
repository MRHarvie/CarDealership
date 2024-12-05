const express = require("express");
const transactionRouter = express.Router();
const {
    getTransactions,
    getTransaction,
    createTransaction,
    updateTransaction,
    deleteTransaction
} = require("../controllers/transaction.controller.js");

// Get all transactions
transactionRouter.get('/', getTransactions);

// Get transaction by MongoDB ID
transactionRouter.get('/id=:id', getTransaction);

// Create a new transaction
transactionRouter.post('/', createTransaction);

// Update a transaction
transactionRouter.put('/id=:id', updateTransaction);

// Delete a transaction
transactionRouter.delete('/id=:id', deleteTransaction);

module.exports = transactionRouter;