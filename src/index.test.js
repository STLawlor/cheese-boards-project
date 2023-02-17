const { sequelize } = require("./db");
const { User, Board, Cheese } = require("./Models/index");
const { seedUsers, seedBoards, seedCheeses } = require("./seedData");

describe("User, Board and Cheese Models", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });

    user1 = await User.create(seedUsers[0]);
    board1 = await Board.create(seedBoards[0]);
    board2 = await Board.create(seedBoards[0]);
    cheddar = await Cheese.create(seedCheeses[0]);
  });

  // Create, Find, Delete Model data
  it("can create a User", async () => {
    expect(user1).toBeInstanceOf(User);
    expect(user1.name).toEqual("user1");
  });

  it("can create a Board", async () => {
    expect(board1).toBeInstanceOf(Board);
    expect(board1.rating).toEqual(1);
  });

  it("can create a Cheese", async () => {
    expect(cheddar).toBeInstanceOf(Cheese);
    expect(cheddar.title).toEqual("Cheddar");
  });

  it("can find Models data", async () => {
    const users = await User.findAll();
    const boards = await Board.findAll();
    const cheeses = await Cheese.findAll();

    expect(users.length).toEqual(1);
    expect(users[0].name).toEqual("user1");
    expect(boards.length).toEqual(2);
    expect(boards[0].type).toEqual("board1");
    expect(cheeses.length).toEqual(1);
    expect(cheeses[0].title).toEqual("Cheddar");
  });

  it("can delete from User", async () => {
    const userDelete = await User.create({
      name: "user",
      email: "user@email.com",
    });

    await userDelete.destroy();
    const users = await User.findAll();
    expect(users.length).toEqual(1);
  });

  it("can delete from Board", async () => {
    const boardDelete = await Board.create({
      type: "board",
      description: "Descr",
      rating: 2,
    });

    await boardDelete.destroy();
    const boards = await Board.findAll();
    expect(boards.length).toEqual(2);
  });

  it("can delete from Cheese", async () => {
    const cheeseDelete = await Cheese.create({
      title: "cheeseDelete",
      description: "Descr",
    });

    await cheeseDelete.destroy();
    const cheeses = await Cheese.findAll();
    expect(cheeses.length).toEqual(1);
  });

  // Model association
  it("can add a Boards to a User", async () => {
    await user1.addBoard([board1, board2]);
    const user1Boards = await user1.getBoards();

    expect(user1Boards.length).toEqual(2);
  });
});
