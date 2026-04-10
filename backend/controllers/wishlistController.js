const User = require('../models/User');
const Product = require('../models/Product');

const addProductToWishlist = async (req, res) => {
    const { productId } = req.params;

    const product = await Product.findById(productId);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    const user = await User.findByIdAndUpdate(
        req.user._id,
        { $addToSet: { wishlist: productId } },
        { new: true }
    ).populate('wishlist');

    res.status(200).json({
        message: 'Product added to wishlist',
        wishlist: user.wishlist
    });
};

const removeProductFromWishlist = async (req, res) => {
    const { productId } = req.params;

    const user = await User.findByIdAndUpdate(
        req.user._id,
        { $pull: { wishlist: productId } },
        { new: true }
    ).populate('wishlist');

    res.status(200).json({
        message: 'Product removed from wishlist',
        wishlist: user.wishlist
    });
};

const getWishlistProducts = async (req, res) => {
    const user = await User.findById(req.user._id).populate('wishlist');

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ wishlist: user.wishlist });
};

module.exports = {
    addProductToWishlist,
    removeProductFromWishlist,
    getWishlistProducts
};
