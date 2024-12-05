const { Car } = require("../models/car.model.js");

const getCars = async (req, res) => {
    try {
        const cars = await Car.find({});
        res.status(200).json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getCar = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }
        res.status(200).json(car);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getCarByVIN = async (req, res) => {
    try {
        const { vin } = req.params;
        const car = await Car.findOne({ vin });
        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }
        res.status(200).json(car);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createCar = async (req, res) => {
    try {
        const newCar = new Car(req.body);
        await newCar.save();
        res.status(201).json(newCar);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateCar = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCar = await Car.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updatedCar) {
            return res.status(404).json({ message: "Car not found" });
        }
        res.status(200).json(updatedCar);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteCar = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCar = await Car.findByIdAndDelete(id);
        if (!deletedCar) {
            return res.status(404).json({ message: "Car not found" });
        }
        res.status(200).json({ message: "Car deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getCars,
    getCar,
    getCarByVIN,
    createCar,
    updateCar,
    deleteCar
};