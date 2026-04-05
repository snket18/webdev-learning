// fetch vs axios 

// function main() {
//     fetch("http://localhost:3000/user").then(async response => {
//         const key = await response.json();
//         console.log(key);
//         // await resonse.txt
//         return key
//     });

// }

// const value =  main()
// console.log("fdgd", value);
// // console.log(json);

// async function main1() {
//     const response = await fetch("https://sum-server.100xdevs.com/todos") // fecting todos 

//     console.log(response)

//     const data = await response.json(); // converting to json 

//     console.log(data)
// } 

const axios = require("axios");

//function 
//fectching
// aurgument pass karna aana chahiyhe
// secound object mai headers send kiya 
// body send kiya hai
//last mai prnting kiya hai
// funciton call kiya hai
async function main() {
    const response = await axios (
     "https://httpdump.app/dumps/0302c957-5966-4077-8dca-66b7009b3c9d" , 
     {
        method: "POST",
        headers : { Authorization : 
        "bearer 123" ,
        },
    },   
    ); 
    
console.log(response.data)
}

main();