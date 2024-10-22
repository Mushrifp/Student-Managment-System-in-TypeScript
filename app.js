"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv = require("dotenv");
var mainRouter_1 = require("./router/mainRouter");
var app = express();
dotenv.config();
app.set("view engine", 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', mainRouter_1.default);
var PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
