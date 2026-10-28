const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const {
    addProductToWishlist,
    removeProductFromWishlist,
    getWishlistProducts
} = require('../controllers/wishlistController');
const { protect } = require('../middleware/authMiddleware');
const {uservalidation} = require('../middleware/validation.middleware');


router.post('/register', uservalidation,registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.post('/wishlist/:productId', protect, addProductToWishlist);
router.delete('/wishlist/:productId', protect, removeProductFromWishlist);
router.get('/wishlist', protect, getWishlistProducts);

module.exports = router;
