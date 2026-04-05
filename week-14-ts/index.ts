

// function greet(firstName : any ){
//     console.log("welcome back " + firstName);
// }

// greet("sanket");



// function sum ( a  : any  ,  b : any ){
    
//   let add = a + b ;
//     return add;
// }

// console.log(sum (10 , 20));


// function canVote ( age : number ){
//     if (age > 18){
//         console.log("you can vote")
//     } else {
//         console.log("you cannot vote")
//     }
// }


// canVote(19);


// function call(fn : () => void ){
//     setTimeout(fn , 1000)
// }

// function log(){
//     console.log("hi there");
// }

// call(log);



// function call(user :{
//     name : String ,
//     age : Number 
//     }
// ){
//    console.log("welcome " + user.name  ) ;
// }


// call({
//     name : "sanket",
//     age : 19 
// })




type  UserType = {
    name : String ,
    age : Number ,
    address : String 
}


function call(user : UserType ){
   console.log("i am " + user.name)
}

let user : UserType = {
    name : "saket",
    age : 19 ,
    address : "pune"
}


call(user)