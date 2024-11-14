const mongoose = require('mongoose');


async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://vinhpham220212:vinh13012004@cluster0.w6qru.mongodb.net/ERD_sample?retryWrites=true&w=majority&appName=Cluster0");
        console.log('MongoDB connected');
    }catch(err) {
        console.log("Connect database failed", err);
    }
}
module.exports = connectDB;