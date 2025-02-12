const { products } = require("../db/product-data");

const createProduct = (req, res) => {
  const { name, description, price, stock } = req.body;
  const lastProduct = products[products.length - 1];

  const newProduct = {
    _id: lastProduct + 1,
    name,
    description,
    price,
    stock,
    images,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  products.push(newProduct);
  res.send("New product added!");
};

const gettingProducts = (req, res) => {
  res.send(products);
};

const getProductById = (req, res) => {
  let { _id } = req.body;
  const product = products.find((product) => product._id == _id);
  res.send(product);
};

const updateProductbyId = (req, res) => {
  let { _id } = req.body;
  const product = products.find((product) => product._id == _id);

  if (product) {
    product.name = name;
    product.description = description;
    product.price = price;
    product.stock = stock;
    product.images = images;
    product.updatedAt = new Date();
  }
};

const deleteProductbyId = (req, res) => {
  let { _id } = req.body;
  const newProducts = products.filter((product) => {
    product._id == _id;
  });
  products = newProducts;
  res.send("Product successfully deleted!");
};

module.exports = {
  createProduct,
  gettingProducts,
  getProductById,
  updateProductbyId,
  deleteProductbyId,
};
