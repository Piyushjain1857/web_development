// var a=10;
// console.log(a);
// function demo(){
//     let b=20;
//     console.log(b);
// }
// demo();


console.log("a")//synchronous
setTimeout(()=>{
    console.log("b");
},5000)
setTimeout(()=>{
    console.log("c");
},3000)
setTimeout(()=>{
    console.log("d");
},2000)
console.log("e");//synchronous

// output
a
e
d
c
b
// Explanation: The synchronous code runs first then asynchronous code(setTimeout). 