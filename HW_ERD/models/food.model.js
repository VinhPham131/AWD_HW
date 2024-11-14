const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        unique: true
    },
    img : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    category_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    },
    address : {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("food", foodSchema);