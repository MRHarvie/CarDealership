const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter customer's first name"]
    },
    lastName: {
        type: String,
        required: [true, "Please enter customer's last name"]
    },
    email: {
        type: String,
        required: [true, "Please enter customer's email"],
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String
    },
    licenseNumber: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;