const { User } = require("./User");
const { Board } = require("./Board");
const { Cheese } = require("./Cheese");

User.hasMany(Board);
Board.belongsTo(User);

Cheese.belongsToMany(Board, { through: "board_cheeses"});
Board.belongsToMany(Cheese, { through: "board_cheeses"});

module.exports = {
  User,
  Board,
  Cheese,
};
