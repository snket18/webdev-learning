// Importing required types and modules from "express" and "jsonwebtoken".
import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from "./config"; // Importing the JWT secret key from a configuration file.
import jwt from "jsonwebtoken"; // Importing the jsonwebtoken library for token verification.

// Middleware to validate user authentication using a JWT token.
export const userMiddleware = async (req: Request, res: Response, next: NextFunction) => {

  const header = req.headers["authorization"];
console.log("HEADER RECEIVED:", header);

if (!header) {
  return res.status(401).json({ message: "No authorization header" });
}

const token = header.split(" ")[1];
console.log("TOKEN EXTRACTED:", token);

const decoded = jwt.verify(token, JWT_SECRET);
console.log("DECODED:", decoded);


  next();
};
