const express = require('express')
const router = express.Router();


const { getProducts, newProduct, getSingleProduct, updateProduct, deleteproduct } = require('../controllers/productController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/products').get(getProducts);
router.route('/product/:id').get(isAuthenticatedUser, authorizeRoles('admin') , getSingleProduct);

router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin') , newProduct);

router.route('/admin/product/:id')
                .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
                .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteproduct);

module.exports = router;