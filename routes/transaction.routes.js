const express = require("express");
const transactionRouter = express.Router();
const {
    getTransactions,
    getTransaction,
    getTransactionsByCustomer,
    getTransactionsByCar,
    createTransaction,
    updateTransaction,
    deleteTransaction
} = require("../controllers/transaction.controller.js");

// Get all transactions
transactionRouter.get('/', getTransactions);

// Get transaction by MongoDB ID
transactionRouter.get('/id=:id', getTransaction);

// Get transactions by customer ID
transactionRouter.get('/customer=:customerId', getTransactionsByCustomer);

// Get transactions by car ID
transactionRouter.get('/car=:carId', getTransactionsByCar);

// Create new transaction
transactionRouter.post('/', createTransaction);

// Update transaction by ID
transactionRouter.put('/id=:id', updateTransaction);

// Delete transaction by ID
transactionRouter.delete('/id=:id', deleteTransaction);

module.exports = transactionRouter;