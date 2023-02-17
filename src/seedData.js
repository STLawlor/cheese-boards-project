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
    type: "Just Cheddar",
    description: "Just Cheddar",
    rating: 1,
  },
  {
    type: "Cheddar Brie",
    description: "Cheddar and Brie",
    rating: 2,
  },
  {
    type: "Brie Feta",
    description: "Brie and Feta",
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
