const fs = require("fs");
const path = require("path");


async function principal(req,res){
    res.render("index.ejs");
}

module.exports = {
    principal,
}