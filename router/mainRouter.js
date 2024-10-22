"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mainController = require("../controller/mainController");
var router = (0, express_1.Router)();
var controller = new mainController.teacherController();
router.get("/", function (req, res) {
    res.render("main");
});
router.get("/logIn", function (req, res) {
    res.render("main");
});
router.post('/loginVerify', function (req, res) { return controller.verifyTeacherLogin(req, res); });
exports.default = router;
