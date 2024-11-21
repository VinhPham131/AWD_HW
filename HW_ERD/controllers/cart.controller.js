const cartModel = require('../models/cart.model');

module.exports = {
    createCart : async (req, res) => {
        const body = req.body;
        const newCart = await cartModel.create(body);
        return res.status(201).json(newCart);
    },
    getCarts : async (req, res) => {
        const carts = await cartModel.find();
        return res.status(200).json(carts);
    },
    updateCart : async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const updateCart = await cartModel.findByIdAndUpdate(id, body, {new: true});
        return res.status(200).json(updateCart);
    },
    deleteCart : async (req, res) => {
        const id = req.params.id;
        const deleteCart = await cartModel.findByIdAndDelete(id);
        return res.status(200).json(deleteCart);
    }
}