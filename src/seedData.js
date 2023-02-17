const seedUsers = [
  {
    name: "user1",
    email: "user1@email.com",
  },
  {
    name: "user2",
    email: "user2@email.com",
  },
  {
    name: "user2",
    email: "user2@email.com",
  },
];

const seedBoards = [
  {
    type: "board1",
    description: "board1 descr",
    rating: 1,
  },
  {
    type: "board2",
    description: "board2 descr",
    rating: 2,
  },
  {
    type: "board3",
    description: "board3 descr",
    rating: 3,
  },
];

const seedCheeses = [
  {
    title: "Cheddar",
    description: "Cheddar descr",
  },
  {
    title: "Brie",
    description: "Brie descr",
  },
  {
    title: "Feta",
    description: "Feta descr",
  },
];

module.exports = {
  seedUsers,
  seedBoards,
  seedCheeses,
};
