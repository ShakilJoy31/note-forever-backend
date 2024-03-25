"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationModel = exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    // Automatic give the field called createdAt and updatedAt
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
exports.AuthenticationModel = (0, mongoose_1.model)('users', exports.userSchema);
