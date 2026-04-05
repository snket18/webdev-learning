// arrow fucntions
// normal method 

// const sanket =[1,2,3,4,5];

// // creating new array to store the answers 
// const newSanket =[];

// for(let i=0; i < sanket.length; i++) {
//     newSanket.push(sanket[i]* 3);
// }

// console.log(newSanket)


// using arrow funciton 

// const sanket = [1,2,3,4,5];

// const ans= sanket.map(function(i){
//     return i*2
// });

// console.log(ans)


// filtering

// normal method 

// const sanket = [1,2,3,4,5];

// const newSanket=[];

// for (let i=0 ; i < sanket.length ; i++) {
//     if (sanket[i]% 2== 0) {
//         newSanket.push(sanket[i])
//     }
// }

// console.log(newSanket);


// using map and filtering

 const sanket =[1,2,3,4,5];

 function filterlogic(n) {
    if (n%2 == 0) {
        return true;
    }
    else {
        return false;
    }
 }

 console.log;
