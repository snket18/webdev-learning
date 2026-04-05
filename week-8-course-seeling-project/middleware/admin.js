const jwt = require ("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

// higher level passowrd 
// function middleware (password) {
//     return function (req , res , next) {
//        const token = req.headers.token;
//        const decoded = jwt.verify(token , password);
        
//        if (decoded) {
//         request.userId = decoded.id ;
//         next ();
//        } else {
//         res.status(403).json({
//             message : " you are not signed in"
//         })
//        }
//     } 
// }


function adminMiddleware (req , res , next ) {
     const token = req.headers.token;
     console.log({token})
     console.log({JWT_ADMIN_PASSWORD})
     const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

     const { title , description , imageUrl , price } = req.body;

     if (decoded) {
        req.userId = decoded.id ;
        next()
     } else {
        res.status(403).json ({
            message : "you are not signed in "
        })
     }

}

module.exports = {
    adminMiddleware : adminMiddleware
}

