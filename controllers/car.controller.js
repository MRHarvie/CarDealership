const Car = require("../models/car.model.js");

const getCars = async (req, res) => {
    try {
        const cars = await Car.find({});
        res.status(200).json(cars);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getCar = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).json({message: "Car not found"});
        }
        res.status(200).json(car);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getCarByVIN = async (req, res) => {
    try {
        const { vin } = req.params;
        const car = await Car.findOne({ vin: vin });
        if (!car) {
            return res.status(404).json({message: "Car not found with this VIN"});
        }
        res.status(200).json(car);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const createCar = async (req, res) => {
    try {
        const car = await Car.create(req.body);
        res.status(201).json(car);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateCar = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findByIdAndUpdate(id, req.body);
        if (!car) {
            return res.status(404).json({message: "Car not found"});
        }
        const updatedCar = await Car.findById(id);
        res.status(200).json(updatedCar);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const deleteCar = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findByIdAndDelete(id);
        if (!car) {
            return res.status(404).json({message: "Car not found"});
        }
        res.status(200).json({ message: "Car deleted."});
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = {
    getCars,
    getCar,
    getCarByVIN,
    createCar,
    updateCar,
    deleteCar
};