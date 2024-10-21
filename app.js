"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/students', function (req, res) {
    res.send("hii stutendt");
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
