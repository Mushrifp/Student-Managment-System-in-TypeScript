"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mainController = require("../controller/mainController");
var router = (0, express_1.Router)();
var controller = new mainController.teacherController();
router.get("/", function (req, res) {
    res.render("login");
});
router.get("/logIn", function (req, res) {
    res.render("login");
});
router.post('/dashboard', function (req, res) { return controller.verifyTeacherLogin(req, res); });
router.get('/dashboard', function (req, res) { return res.render('dash'); });
router.get('/createNew', function (req, res) { return controller.goToCreateNew(req, res); });
router.post('/createNewStd', function (req, res) { return controller.createNewStd(req, res); });
exports.default = router;
