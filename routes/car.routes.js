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

// Create new car
carRouter.post('/', createCar);

// Update car by ID
carRouter.put('/id=:id', updateCar);

// Delete car by ID
carRouter.delete('/id=:id', deleteCar);

module.exports = carRouter;