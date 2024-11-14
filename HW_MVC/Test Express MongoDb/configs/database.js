const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    }catch(err) {
        console.log("Connect database failed", err);
    }
}
module.exports = connectDB;