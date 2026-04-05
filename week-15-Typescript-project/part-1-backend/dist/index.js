"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("./db");
const utils_1 = require("./utils");
const db_2 = require("./db");
const middleware_1 = require("./middleware");
const config_1 = require("./config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/api/v1/signup", async function (req, res) {
    // imp things use Zod for validation and Hashing for Passwords 
    const username = req.body.username;
    const password = req.body.password;
    await db_1.UserModel.create({
        username: username,
        password: password
    });
    res.json({
        message: "user has signed up successfully"
    });
});
app.post("/api/v1/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await db_1.UserModel.findOne({
        username,
        password
    });
    if (existingUser) {
        const token = jsonwebtoken_1.default.sign({
            id: existingUser._id
        }, config_1.JWT_SECRET);
        res.json({
            token
        });
    }
    else {
        res.status(403).json({
            message: "wrong credentials"
        });
    }
});
app.post("/api/v1/content", middleware_1.userMiddleware, async function (req, res) {
    const { link, title } = req.body;
    // Create a new content entry linked to the logged-in user.
    await db_2.ContentModel.create({
        link,
        title,
        userId: req.userId,
        tags: []
    });
    res.json({ message: "Content added" }); // Send success response.
});
app.post("/api/v1/delContent", function (req, res) {
});
app.post("/api/v1/brain/share", middleware_1.userMiddleware, async function (req, res) {
    const share = req.body.share;
    try {
        if (share) {
            await db_1.LinkModel.create({
                userId: req.userId,
                hash: (0, utils_1.random)(10)
            });
        }
        else {
            await db_1.LinkModel.deleteOne({
                userId: req.userId
            });
        }
        res.json({
            message: "updated the sharable link"
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Error updating sharable link",
            error: err.message
        });
    }
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
