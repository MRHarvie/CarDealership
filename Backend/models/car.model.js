const mongoose = require('mongoose');

// Features SubSchema - for detailed car features
const FeaturesSubSchema = mongoose.Schema({
    interior: {
        type: String,
        required: true
    },
    exterior: {
        type: String,
        required: true
    },
    safetyFeatures: [{
        type: String
    }],
    technology: [{
        type: String
    }]
});

// Car Model
const CarSchema = mongoose.Schema({
    make: {
        type: String,
        required: [true, "Please enter the car make"]
    },
    model: {
        type: String,
        required: [true, "Please enter the car model"]
    },
    year: {
        type: Number,
        required: [true, "Please enter the car year"]
    },
    price: {
        type: Number,
        required: [true, "Please enter the car price"]
    },
    mileage: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['available', 'sold', 'reserved'],
        default: 'available'
    },
    features: FeaturesSubSchema,
    vin: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

// Customer Model
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

// Transaction/Sale Model
const TransactionSchema = mongoose.Schema({
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    salePrice: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ['cash', 'finance', 'lease'],
        required: true
    },
    saleDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    }
}, {
    timestamps: true
});

// Create models from schemas
const Car = mongoose.model('Car', CarSchema);
const Customer = mongoose.model('Customer', CustomerSchema);
const Transaction = mongoose.model('Transaction', TransactionSchema);

// Export all models
module.exports = {
    Car,
    Customer,
    Transaction
};