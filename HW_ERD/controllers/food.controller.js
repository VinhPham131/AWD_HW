const foodModel = require('../models/food.model');

module.exports = {
    createFood : async (req, res) => {
        const body = req.body;
        const newFood = await foodModel.create(body);
        return res.status(201).json(newFood);
    },
    getFoods : async (req, res) => {
        const foods = await foodModel.find();
        return res.status(200).json(foods);
    },
    updateFood : async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const updateFood = await foodModel.findByIdAndUpdate(id, body, {new: true});
        return res.status(200).json(updateFood);
    },
    deleteFood : async (req, res) => {
        const id = req.params.id;
        const deleteFood = await foodModel.findByIdAndDelete(id);
        return res.status(200).json(deleteFood);
    }
}