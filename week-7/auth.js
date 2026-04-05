const jwt = require("jsonwebtoken");
const JWT_SECRET = "secret";

function auth (req , res , next) {
    const token = req.headers.authorization;

    const response = jwt.verify (token,JWT_SECRET);

    if(response) {
        req.userId = token.userId;
        next();
    } else {
        req.status(403).json({
            msg : "incorrect crediantials"
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}