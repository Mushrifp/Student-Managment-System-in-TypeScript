"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mainController = require("../controller/mainController");
var router = (0, express_1.Router)();
var teacherFunctions = new mainController.teacherController();
var loadPages = new mainController.goToPages();
router.get("/", function (req, res) {
    res.render("login");
});
router.get("/logIn", function (req, res) {
    res.render("login");
});
router.post('/dashboard', function (req, res) { return teacherFunctions.verifyTeacherLogin(req, res); });
router.get('/dashboard', function (req, res) { return loadPages.loadDash(req, res); });
router.get('/createNew', function (req, res) { return loadPages.goToCreateNew(req, res); });
router.post('/createNewStd', function (req, res) { return teacherFunctions.createNewStd(req, res); });
router.get('/editStd', function (req, res) { return teacherFunctions.editStudents(req, res); });
router.post('/saveChanges', function (req, res) { return teacherFunctions.saveChanges(req, res); });
router.get('/deleteStd', function (req, res) { return teacherFunctions.deleteStd(req, res); });
exports.default = router;
