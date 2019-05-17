const Sequelize = require("sequelize");
const todoModel = require("./models/todo");

const sequelize = new Sequelize("todo_list", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const todo = todoModel(sequelize, Sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.info("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

sequelize.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports = {
  todo
};
