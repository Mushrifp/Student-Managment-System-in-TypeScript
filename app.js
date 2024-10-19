"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv = require("dotenv");
dotenv.config();
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.send("welcome to the page ");
});
app.listen(process.env.PORT, function () {
    console.log("server started running http://localhost:".concat(process.env.PORT));
});
