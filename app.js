//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

let items = ["Buy food" , "Cook food" ,"Eat Food"];

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.post("/",function (req,res) {
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.get("/",function (req,res) {
    let today = new Date();
    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    let day = today.toLocaleDateString("en-US",options);
    res.render("list", {kindOfDay:day ,newItem:items});
    
});

app.listen(3000,function () {
    console.log("Server started on port 3000");
});