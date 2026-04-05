//classes
// const rect1 = {
//     width:2,
//     hight:3,
//     color:"red"

// }

// function area(rect) {
//   return rect.width * rect.hight;
// }

// const ans= area(rect1);
// console.log(ans);

// class rectangle {
//   constructor(width,hight,color){
//     this.width = width;
//     this.hight = hight;
//     this.color = color;
//   }

//   area () {
//     const area = this.width * this.hight;
//     return area;
//   }
  
//   paint() {
//     console.log(`painting with color ${this.color}`);
//   }
// }

// const rect = new rectangle (2,4,"red");
// const area = rect.area();
// rect.paint();
// console.log(area)

//Other examples of classes
//date
// const now = new Date(); // current date and timne 
// console.log(now.toISOString()); //outputs the dates in ISO format  

//map
// const map = new Map();
// map.set('name','alice');
// map.set('age',30);
// console.log(map.get('name'));

// 

// function waitFor3S(resolve){
//     setTimeout(resolve,3000)
// }

// function setTimeoutPromisified() {
//     return new Promise(waitFor3S);
// }

// function main() {
//     console.log("the main is called")
// }

// setTimeoutPromisified().then(main);


// function random() {

// }

// let p = new Promise (random);
// console.log(p);

// function readFile(fileName) {
//     // read the file and return value 
//     return new Promise();
// }

// const p = await readFile("a.txt");
// function callback(contents) {
//     console.log(constents);

// }
// p.then(callback)
// for (let i=0;i<100000;i++){

// }


function fn(resolve) {
    resolve();
    console.log("after resolve");

}

const p = new Promise (fn);
p.then(function() {
    console.log("after promise");

})