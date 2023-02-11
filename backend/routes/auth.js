const express = require('express');
const router = express.Router();


const { registerUser, loginUser, forgotPassword, resetPassword, logout, allUsers } = require('../controllers/authController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/test').get(allUsers);
router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), allUsers);



module.exports = router;