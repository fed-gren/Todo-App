const express = require("express");
const { todo } = require("./sequelize");
const apiTodo = require("./app/api/todo");

const app = express();
app.use(express.json());

apiTodo(app, todo);

const port = 8080;

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});