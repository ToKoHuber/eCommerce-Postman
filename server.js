const express = require("express");
const bodyParser = require("body-parser");
const {
  createUSer,
  gettingUsers,
  userLogin,
  updateUser,
} = require("./services/user-routes");
const { users } = require("./db/user-data");
const {
  createProduct,
  gettingProducts,
  getProductById,
  updateProductbyId,
  deleteProductbyId,
} = require("./services/product-routes");
const app = express();
const port = 4000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//user routing register

app.post("/user/register", createUSer); //register new user

//user routing login
app.post("/user/login", userLogin); //Authenticate a user

app.get("/users", gettingUsers); // Retroeve logged-in user's profile

app.put("/user", updateUser); // Update logged-in user's profile

app.post("/products", createProduct); //Create a new product

app.get("/products", gettingProducts); //Get all products

app.get("/products/:id", getProductById); //Get a single product by ID

app.put("/products/:id", updateProductbyId); //Update a product by ID

app.delete("/products/:id", deleteProductbyId); //Delete a product by ID

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`Example app listening on port ${port}`);
});
