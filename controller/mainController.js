"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.goToPages = exports.teacherController = void 0;
var dbconfig_1 = require("../model/dbconfig");
var teacherController = /** @class */ (function () {
    function teacherController() {
    }
    teacherController.prototype.verifyTeacherLogin = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var teacherEmail, teacherPassword, teacherSignupData;
            return __generator(this, function (_a) {
                try {
                    teacherEmail = "teacher@123";
                    teacherPassword = "abc";
                    teacherSignupData = {
                        email: req.body.email,
                        password: req.body.password
                    };
                    if (teacherEmail === teacherSignupData.email) {
                        if (teacherPassword === teacherSignupData.password) {
                            res.redirect("/dashboard");
                        }
                        else {
                            res.render('login', { passError: "invalid password", data: teacherSignupData });
                        }
                    }
                    else {
                        res.render("login", { emailError: "invalid email", data: teacherSignupData });
                    }
                }
                catch (error) {
                    res.status(500).json({ message: 'Error' });
                }
                return [2 /*return*/];
            });
        });
    };
    teacherController.prototype.createNewStd = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var studentsData, emailCheck, querys, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        studentsData = {
                            name: req.body.name,
                            email: req.body.email,
                            password: req.body.password,
                            rollno: req.body.rollno,
                            course: req.body.course
                        };
                        return [4 /*yield*/, dbconfig_1.default.query("SELECT * FROM students WHERE email = $1", [studentsData.email])];
                    case 1:
                        emailCheck = _a.sent();
                        if (!(emailCheck.rows.length > 0)) return [3 /*break*/, 2];
                        res.render('create', { message: "Email already exists", data: studentsData });
                        return [3 /*break*/, 4];
                    case 2:
                        querys = "INSERT INTO students (name, email, password, rollno, course) VALUES ($1, $2, $3, $4, $5)";
                        return [4 /*yield*/, dbconfig_1.default.query(querys, [studentsData.name, studentsData.email, studentsData.password, studentsData.rollno, studentsData.course])];
                    case 3:
                        _a.sent();
                        res.redirect('/dashboard');
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error("this is the DB er", error_1);
                        res.status(500).json({ message: 'Error' });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    teacherController.prototype.editStudents = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var stdID, query, dataOfStudent, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        stdID = Number(req.query.id);
                        query = "SELECT * FROM students WHERE id = '".concat(stdID, "'");
                        return [4 /*yield*/, dbconfig_1.default.query(query)];
                    case 1:
                        dataOfStudent = _a.sent();
                        res.render("editStd", { data: dataOfStudent.rows });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.error("this is the DB er", error_2);
                        res.status(500).json({ message: 'Error' });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    teacherController.prototype.saveChanges = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var studentsData, emailCheck, updateQuery, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        studentsData = {
                            name: req.body.name,
                            email: req.body.email,
                            password: req.body.password,
                            rollno: req.body.rollno,
                            course: req.body.course
                        };
                        return [4 /*yield*/, dbconfig_1.default.query("SELECT * FROM students WHERE email = $1", [studentsData.email])];
                    case 1:
                        emailCheck = _a.sent();
                        if (!(emailCheck.rows.length > 0 && emailCheck.rows[0].email !== studentsData.email)) return [3 /*break*/, 2];
                        res.render('editStd', { message: "Email already exists", data: [studentsData] });
                        return [3 /*break*/, 4];
                    case 2:
                        updateQuery = "UPDATE students SET name = $1, email = $2, password = $3, rollno = $4, course = $5 WHERE id = $6";
                        return [4 /*yield*/, dbconfig_1.default.query(updateQuery, [studentsData.name, studentsData.email, studentsData.password, studentsData.rollno, studentsData.course, req.body.id])];
                    case 3:
                        _a.sent();
                        res.render('editStd', { message: "Updated", data: [studentsData] });
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        console.log("errrrr", error_3);
                        res.status(500).json({ message: 'Error' });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return teacherController;
}());
exports.teacherController = teacherController;
//----------------------------------------------------
var goToPages = /** @class */ (function () {
    function goToPages() {
    }
    goToPages.prototype.goToCreateNew = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    res.render('create');
                }
                catch (error) {
                    res.status(500).json({ message: 'Error' });
                }
                return [2 /*return*/];
            });
        });
    };
    goToPages.prototype.loadDash = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var dataOfStudents, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, dbconfig_1.default.query('SELECT * FROM students')];
                    case 1:
                        dataOfStudents = _a.sent();
                        res.render('dash', { students: dataOfStudents.rows });
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        res.status(500).json({ message: 'Error' });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return goToPages;
}());
exports.goToPages = goToPages;
