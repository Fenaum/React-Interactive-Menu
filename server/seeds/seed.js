const mongoose = require('mongoose');
const db = require('../models');
const menuData = require('../db/menu.json')

mongoose.connect("mongodb://localhost:27017/Menu-Master", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database Connected'))
.catch(err => console.error('Connection error', err));

const entrees = menuData.menu.entree.map(({ id, ...rest }) => rest);
const appetizers = menuData.menu.appetizer.map(({ id, ...rest }) => rest);

const seedDatabase = async () => {
    try {
        // Remove existing data from the collections
        await db.Entree.deleteMany({});
        await db.Appetizer.deleteMany({});

        // Create Entrees and Appetizers
        const createEntrees = await db.Entree.create(entrees);
        const createAppetizers = await db.Appetizer.create(appetizers);

        console.log("Seed data inserted successfully!")
        process.exit(1);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDatabase();