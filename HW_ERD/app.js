const express = require('express');
const app = express();
const connectDB = require('./configs/database');								
const router = require('./routes');
const bodyParser = require('body-parser');		

PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');									
app.use(express.static('public')); // Để phục vụ tệp tĩnh (CSS, JS)		

const methodOverride = require('method-override');
app.use(methodOverride('_method'));



connectDB();
router(app);


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})