exports.validateProduct = (product) => {
  if (!product.name || product.price <= 0) {
    throw new Error("Invalid product data");
  }
};
