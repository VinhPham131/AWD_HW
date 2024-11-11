const express = require("express");
const router = express.Router();
const rectangleController = require('../controllers/rectangleController');

router.get('/', rectangleController.showForm);
router.post('/calculate', rectangleController.calculateRectangle);
module.exports = router;