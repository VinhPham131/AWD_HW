const express = require('express');
const router = express.Router();
const api = require('../controllers/fetchAPIcategory.controller');

router.get('/', api.showCategories);

module.exports = router;
