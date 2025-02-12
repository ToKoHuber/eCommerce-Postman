// const express = require("express");
// const app = express();
// const port = 4000;

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const {
  createUSer,
  gettingUsers,
  userLogin,
} = require("./services/user-routes");
const { users } = require("./db/user-data");
const app = express();
const port = 4000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//user routing register
app.post("/user/register", createUSer);

//user routing login
app.post("/user/login", userLogin);

app.get("/users", gettingUsers);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
