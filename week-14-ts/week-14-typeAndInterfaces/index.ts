


// interface User {
//     name : string ,
//     age : number ,
//     address : {
//         state : string ,
//         country : string,
//         pincode : number
//     }
// }

import { FileWriter } from "istanbul-lib-report";

// let user : User ={
//     name : "sanket",
//     age : 19 ,
//     address : {  // for the optional to have address or not 
//         // we just put the "?" after the key(veriable).
//         state :"mp",
//         country : "india",
//         pincode : 412513
//     }
// }


// function isLegal(user : User) : boolean{
//     if(user.age >= 18){
//         return true;
//     } else {
//        return false 
//     }
// }

// console.log(isLegal(user));


// interface people {
//     name : string ,
//     age : number 
// }



// class Manager implements people { 
//     // the class whose using the interface should have the same objects 
//     // present in it , if we want to add more ,  we can 
//     name : string ;
//     age : number ;

//     constructor(name : string , age : number ){
//         this.name = name ;
//         this.age = age ; 
//     }
// }


// let user = new Manager ("sanket" , 20);
// console.log(user.age)


// class shape {
//     area(){
//         console.log("im the area")
//     }
// }


// class Rectangle extends shape {
//     width : number ;
//     hight : number ;
    
//     constructor(){
//         super()  // this is important to call the main "Class"
//         this.hight = 1 ,
//         this.width = 2 
//     }
    
// }


// const raw = new Rectangle()
// raw.area()


// abstract classes 

// abstract class User {
//     name : string ;

//     constructor(name : string){
//         this.name = name ;
//     }

//     abstract greet: () => string ;
// }


// interfaces and types 

// interface User {
//     name : string ,
//     address : string ,
//     age : number 
// }


// type User1 = {
//     name : string ,
//     address : string ,
//     age : number 
// }




// function isLegal(user : User): boolean{
//     return user.age >= 18 
// }


// const result = isLegal( );


// Assignment- 01 

// create a interface and in function use that interface to greet the 
// user and Admin


// interface User {
//     name : string ,

// }

// function greet(user : userOrAdmin ){
//      console.log("good morning " + user.name + " bhai !");
// }

// let userName : User = {
//     name : "teri maki chut" ,
// }


// interface Admin {
//     name : string ,
//     department : string ,
//     potision : string 
// }

// type userOrAdmin = User | Admin ;

// const newUser =  greet( userName);



//Assignmnet - 02  get Max value from the Array 

// function getMax(nums : number[]){

//     let  maxValue = -10000000;

//     for (let i=0 ; i < nums.length; i++){
//         if ( nums[i] > maxValue){
//             maxValue = nums[i];
//         }
//     }
//     return maxValue ;
// }



//  let  result = getMax([1 , 2, 3, 4, 5]);
//  console.log(result);


// Assignments- 03 filterUsers by thir age to be legal voter

interface User {
    name : string ,
    age : number 

}

function filterUsers(user : User[]){

    let ans = [];
    for(let i=0 ; i < user.length ; i++){
        if(user[i].age > 18){
            ans.push(user[i]);
        }
    }
    return ans;
}


let result = filterUsers([{
    name : "sanket",
    age : 19 
}, {
    name : "pranav",
    age : 24
},{
    name : "shree",
    age : 12
}])

console.log(result)