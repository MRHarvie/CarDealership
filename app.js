const carRoute = require("./routes/car.routes.js");
const customerRoute = require("./routes/customer.routes.js");
const transactionRoute = require("./routes/transaction.routes.js");
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

// Middleware
app.use(cors());
app.use(express.json());

// Route registration
app.use("/api/cars", carRoute);
app.use("/api/customers", customerRoute);
app.use("/api/transactions", transactionRoute);

// MongoDB Connection
// Replace with your actual MongoDB connection details
mongoose.connect('mongodb://Student03:Student03@logan', {
    dbName: 'home03'
})
.then(() => {
    console.log("Connected to the database!");
    app.listen(port, () => {
        console.log(`Car Dealership API listening on port ${port}`);
    });
})
.catch((error) => {
    console.log("Failed to connect to the database.", error);
});

module.exports = app;