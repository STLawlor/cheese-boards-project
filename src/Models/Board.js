const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const Board = sequelize.define("Board", {
  type: Sequelize.STRING,
  description: Sequelize.STRING,
  rating: Sequelize.NUMBER,
});

module.exports = { Board };
