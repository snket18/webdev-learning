// interface User {

//     name : string ,
//     id : number ,
//     email : string ,
//     password : string 
// }

// type UpdatedUser = Pick<User , "name" | "email" | "password" >

// function changeInData(UpdatedUser : UpdatedUser) {

// }



// making the the props optional we use "? "
// we use Partail instead of Pick and above syntax is same as Pick


// Readonly 
// we can not able to change internal values .


// type User   = {
//    readonly username : string ,
//    readonly age : number  
// }


// const user : Readonly <User> = {
//     username : "john",
//     age : 19
// }

// user.age = 12 



// Record and Map

// record is just like using the easy syntax in typescript 



// map is like key value pair in c++ 
// interface Users {
//     age : number ,
//     userName : string 
// }

// const users = new Map<string , Users>()
// users.set("sanket" , { age : 19 , userName : "sankyy"})

// const user = users.get("sanket")



// Exclude 