const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customer : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    total_money : {
        type : Number,
        required : true
    },
    payment_method : {
        type : String,
        enum : ["Online", "On Delivery"],
        default : "On Delivery"
    },
    is_payment : {
        type : Boolean,
        default : false
    },
    status : {
        type : String,
        enum : ["Pending", "Comfirm", "Receive", "Ship"],
        default : "Pending"
    },
    card_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "cart"
    }
})
module.exports = mongoose.model("order", orderSchema);