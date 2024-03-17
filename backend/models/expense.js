const Sequelize = require("sequelize");
const sequelise = require("../util/database");

const Expense = sequelise.define("expenses", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isExpense: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  date: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.NOW,
    allowNull: false,
  },
});

module.exports = Expense;
