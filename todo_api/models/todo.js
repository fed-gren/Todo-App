module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('todo', {
      id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('TODO', 'DONE'),
        defaultValue: 'TODO'
      },
      deadline: {
        type: DataTypes.DATE
      },
      priority: {
        type: DataTypes.ENUM("0", "1", "2", "3"),
        defaultValue: "0",
        allowNull: false
      }
    },
    {
      freezeTableName: true,
    }
  );

  return Todo;
}