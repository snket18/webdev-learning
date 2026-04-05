const jwt = require ("jsonwebtoken");

//decode , verify , and generate 

const value = {
    name : "harkirat",
    accountNumber: 123123123
}

// jwt 
// use sign , not generate 
const token = jwt.sign(value,"secret");
console.log(token);

// this token has been generated using this secret , and hence 
// this token can only be verified using this secret 

