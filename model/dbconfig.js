"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv = require("dotenv");
dotenv.config();
var client = new pg_1.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});
client
    .connect()
    .then(function () {
    console.log("DB connected ");
})
    .catch(function (error) {
    console.log("error occured", error);
});
exports.default = client;
