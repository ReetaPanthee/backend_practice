//database connection ko logic/ code lekhne
const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = require("sequelize");
// const Sequelize = sequelize.Sequelize;
// const DataTypes = sequelize.DataTypes;

const SequelizeObject = new Sequelize(
  "postgresql://postgres.buemgvllupsqlqxoqlfk:9502@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
);

SequelizeObject.authenticate()
  .then(() => {
    console.log("Authenticated vayo, connected !!");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.SequelizeObject = SequelizeObject;

module.exports = db;
