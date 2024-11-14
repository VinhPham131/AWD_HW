const express = require('express');
const app = express();
const connectDB = require('./configs/database');

app.use (express.json());
app.use(express.urlencoded({extended: true}));

PORT = process.env.PORT || 3011;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})