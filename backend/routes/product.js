const express = require('express')
const router = express.Router();
const{ getProducts,newProduct,getProduct,updateProduct, deleterProduct} = require('../controllers/productController');
router.route('/products').get(getProducts);
router.route('/admin/product/new').post(newProduct);
router.route('/admin/product/:id').get(getProduct);
router.route('/admin/product/:id').put(updateProduct)
    .delete(deleterProduct)
;
module.exports = router;