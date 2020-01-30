const express = require('express');

const router = express.Router();

const productController = require('../controllers/product');
//Add Product GET
router.get('/add-product', productController.getAddProduct);

//Add Product GET
router.post('/add-product', productController.postAddProduct);

module.exports = router;