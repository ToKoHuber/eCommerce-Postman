const { products } = require("../db/product-data");
const { users } = require("../db/user-data");

const createUSer = (req, res) => {
  console.log("Create users working");
  console.log(req.body);
  //name
  //email
  //password
  //role
  //address

  let { name, email, password, _id } = req.body;
  console.log(name, email, password);
  const lastUser = users[users.length - 1];

  const newUser = {
    _id: lastUser._id + 1,
    name,
    email,
    password,
    createdAt: new Date(),
  };

  users.push(newUser);
  res.send("new user added!");
};

const gettingUsers = (req, res) => {
  res.send(users);
};

const userLogin = (req, res) => {
  let { name, password, _id } = req.body;
  const user = users.find((user) => user.name == name);

  if (user) {
    if (user.password == password) {
      res.send("Login successful!");
    } else res.send("Password not match");
  } else {
    res.send("Try again!");
  }
};

module.exports = {
  createUSer,
  gettingUsers,
  userLogin,
};
