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
exports.AuthService = void 0;
const authentication_model_1 = require("./authentication.model");
// login signup
const userSignupService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield authentication_model_1.AuthenticationModel.create(payload);
    return result;
});
const userLoginService = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield authentication_model_1.AuthenticationModel.findOne({ email: email });
    if (!isUserExist) {
        throw new Error('User does not exist');
    }
    else {
        console.log('UserExist', isUserExist);
        return isUserExist;
    }
});
exports.AuthService = {
    userSignupService,
    userLoginService
};
