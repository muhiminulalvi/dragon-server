const express = require("express");

const app = express();

const cors = require('cors')

app.use(cors())

const categories = require('./data/categories.json')

app.get("/", (req, res) => {
  res.json({ message: "Dragon server is running" });
});

app.get("/categories", (req,res) => {
    res.send(categories)
})

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
