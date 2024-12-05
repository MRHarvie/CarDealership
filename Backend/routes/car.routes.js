const express = require("express");
const carRouter = express.Router();
const {
    getCars,
    getCar,
    getCarByVIN,
    createCar,
    updateCar,
    deleteCar
} = require("../controllers/car.controller.js");

// Get all cars
carRouter.get('/', getCars);

// Get car by MongoDB ID
carRouter.get('/id=:id', getCar);

// Get car by VIN
carRouter.get('/vin=:vin', getCarByVIN);

// Create a new car
carRouter.post('/', createCar);

// Update a car
carRouter.put('/id=:id', updateCar);

// Delete a car
carRouter.delete('/id=:id', deleteCar);

module.exports = carRouter;