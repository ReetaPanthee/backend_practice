const express = require("express");
const app = express();

require("./database/connection");

// const app = require('express')()

/*

app.get("/", (req, res) => {
  res.json({
    name: "rita",
    address: "KTM",
  });
});

app.get("/about", (req, res) => {
  res.json({
    name: "I love you",
  });
});

app.post("/register", function (req, res) {
  res.json({
    name: "registered succesfully",
  });
});

app.get("/register", function (req, res) {
  res.json({
    name: "registered succesfully",
  });
});

*/

app.get("/books", function (req, res) {
  //llogic to fetch books from database

  res.json({
    message: "Books fetched successfully",
  });
});

app.post("/books", function (req, res) {
  //logic to add book to database goes here..

  res.json({
    message: "Books added successfully",
  });
});

app.delete("/books/:id", function (req, res) {
  //logic to delete book
  res.json({
    message: "Books deleted successfully",
  });
});

app.patch("/books/:id", function (req, res) {
  res.json({
    message: "Books update successfully",
  });
});

// DATABASE_URL =
//   "postgresql://postgres.buemgvllupsqlqxoqlfk:[9502]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres";

app.listen(4000, function () {
  console.log("server/project/backend has started at port 3000.");
});
