const express = require("express");

const app = express();

const cors = require('cors')

app.use(cors())

const categories = require('./data/categories.json')

const news = require('./data/news.json')

app.get("/", (req, res) => {
  res.json({ message: "Dragon server is running" });
});

app.get("/categories", (req,res) => {
    res.send(categories)
})

app.get("/news", (req,res) => {
    res.send(news)
})

app.get("/news/:id", (req,res) => {
    const id = req.params.id;
    console.log(id);
    const selectedNews = news.find(n => n._id == id)
    res.send(selectedNews)
})

app.get("/categories/:id", (req,res)=> {
    const id = req.params.id;
    if(id == 0){
        res.send(news);
    }
    else {
        const categoryNews = news.filter(n => n.category_id == id);
        res.send(categoryNews)
    }
})

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
