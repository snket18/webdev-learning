"use strict";
// interface User {
//     name : string ,
//     age : number ,
//     address : {
//         state : string ,
//         country : string,
//         pincode : number
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
const istanbul_lib_report_1 = require("istanbul-lib-report");
function filterUsers(user) {
    let ans = [];
    for (let i = 0; i < user.length; i++) {
        if (user[i].age > 18) {
            ans.push(user[i]);
        }
    }
    return ans;
}
let result = filterUsers([{
        name: "sanket",
        age: 19
    }, {
        name: "pranav",
        age: 24
    }, {
        name: "shree",
        age: 12
    }]);
console.log(result);
//# sourceMappingURL=index.js.map