//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

let items = ["Buy food" , "Cook food" ,"Eat Food"];
let work = [];

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.post("/",function (req,res) {
    let item = req.body.newItem;
    if(req.body.list==="Work"){
        work.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
})

app.get("/",function (req,res) {
    let today = new Date();
    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    let day = today.toLocaleDateString("en-US",options);
    res.render("list", {listTitle:day ,newItem:items});
    
});

app.get("/work",function (req,res) {
    day = "Work";
    res.render("list", {listTitle:day ,newItem:work});
});

app.get("/about",function (req,res) {
    res.render("about");
})

app.listen(3000,function () {
    console.log("Server started on port 3000");
});