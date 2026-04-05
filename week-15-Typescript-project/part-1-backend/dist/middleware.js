"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const config_1 = require("./config"); // Importing the JWT secret key from a configuration file.
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); // Importing the jsonwebtoken library for token verification.
// Middleware to validate user authentication using a JWT token.
const userMiddleware = async (req, res, next) => {
    const header = req.headers["authorization"];
    console.log("HEADER RECEIVED:", header);
    if (!header) {
        return res.status(401).json({ message: "No authorization header" });
    }
    const token = header.split(" ")[1];
    console.log("TOKEN EXTRACTED:", token);
    const decoded = jsonwebtoken_1.default.verify(token, config_1.JWT_SECRET);
    console.log("DECODED:", decoded);
    next();
};
exports.userMiddleware = userMiddleware;
