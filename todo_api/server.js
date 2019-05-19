const express = require("express");
const { todo } = require("./sequelize");
const apiTodo = require("./app/api/todo");

const app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

apiTodo(app, todo);

const port = 8080;

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});