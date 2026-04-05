function setTimeoutPromisified(duration) {
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    });
}

// setTimeout => promisified setTimeout
function callback() {
    console.log("hi");
}
// setTimeout (function() {
//     console.log("hi");
//     setTimeout (function(){
//         console.log("hello");
//         setTimeout(function() {
//             console.log("hello there");
//         },5000);;
//     },3000);
// },1000);

// console.log("outside the callback hell"); // jyala time asto means delay asto tyala wait karat nahi synchronous asun pan 




// // setTimeoutPromisifies(5000).then(callbacks);



//promise chaining 
// setTimeoutPromisified(1000).then(function() {
//     console.log("hi");
//     return setTimeoutPromisified(3000)
// }).then(function() {
//     console.log("hello");
//     return setTimeoutPromisified(5000)
// }).then(function(){
//     console.log("hi there");
// });

// console.log("outside the callback hell");



// Async await syntax(same work kartay pan changya apperance madhe
// it looks same as synchronous code but actually works using callbacks as it asynchronnous code
async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hi there");
}

solve();
