const Product = require('../models/Product');

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json({ product: products });
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

const getProductsByCategory = async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  res.json(products);
};

module.exports = { getProducts, getProductById, getProductsByCategory };
