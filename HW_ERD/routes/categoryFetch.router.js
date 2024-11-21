const express = require('express');
const router = express.Router();
const api = require('../controllers/fetchAPI.controller');

router.get('/', api.showCategories);

module.exports = router;
