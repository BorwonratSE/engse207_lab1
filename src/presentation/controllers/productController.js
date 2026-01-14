const service = require('../../business/productService');

exports.getAllProducts = async (req, res) => {
  const products = await service.getProducts();
  res.json(products);
};

exports.createProduct = async (req, res) => {
  try {
    const product = await service.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
