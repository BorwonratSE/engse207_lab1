const repo = require('../data/productRepository');
const { validateProduct } = require('./productValidator');

exports.getProducts = async () => {
  return await repo.findAll();
};

exports.createProduct = async (product) => {
  validateProduct(product);
  return await repo.create(product);
};
