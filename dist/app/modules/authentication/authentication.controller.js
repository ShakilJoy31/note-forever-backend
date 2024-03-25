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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const authentication_service_1 = require("./authentication.service");
// User signup
const userSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { ...signupData } = req.body;
        const signupData = {
            name: 'Abdul Motin',
            email: 'motin.6@gmail.com',
            password: '12345'
        };
        const result = yield authentication_service_1.AuthService.userSignupService(signupData);
        res.status(200).json({
            success: true,
            message: 'User created successfully!Thank you.',
            data: result,
        });
    }
    catch (err) {
        console.error(err);
    }
});
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { email, password } = req.body;
        const email = 'motin@gmail.com';
        const password = '12345';
        const result = yield authentication_service_1.AuthService.userLoginService(email, password);
        res.status(200).json({
            success: true,
            message: 'User found!',
            data: result,
        });
    }
    catch (err) {
        console.error(err);
    }
});
exports.LoginController = {
    userSignup,
    userLogin
};
