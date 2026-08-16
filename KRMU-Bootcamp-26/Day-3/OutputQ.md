
synchronous function 

console.log("1st");
function demo(){
    console.log("2nd)
}
demo()
console.log("3rd");


function sum(a,b){
    console.log(a+b)
}
function calculator(a,b,sumCallback){
    sumCallback(a,b)
}
calculator(1,2,sum)



Order of Execution :
JavaScript first executes all synchronous code from the Call Stack. After the Call Stack becomes empty, it executes all Microtasks (Promise callbacks, await continuations, queueMicrotask). Once the Microtask Queue is empty, it executes Macrotasks/Callback Queue tasks such as setTimeout, setInterval, DOM events (onclick,onchange), and I/O callbacks. This process is managed by the Event Loop.

first Synchronous then asynchronous

Call Stack (Synchronous)
        ↓
Microtask Queue
(Promise, await)
        ↓
Macrotask Queue
(setTimeout, onclick, setInterval)


Q1.
setTimeout(()=>{
    console.log("1")
},1000)
console.log("1st");
function demo(){
    console.log("2nd")
}
demo()
console.log("3rd");


Q2.
// console.log("a");
// setTimeout(()=>{
//     console.log("b")
// },5000);
// setTimeout(()=>{
//     console.log("c")
// },3000);
// setTimeout(()=>{
//     console.log("d")
// },2000);
// console.log("e");


Q3.
// setTimeout(()=>{
//     console.log("SetTimeout1");
// },0)
// function delay() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("SetTimeout2");
//       resolve();
//     }, 0);
//   });
// }
// function test() {
//   console.log("Start");
//   delay();
//   console.log("After Delay");
// }
// test();
// console.log("End");


Q4.
// console.log("a");
// setTimeout(()=>{
//     console.log("b")
// },0);
// Promise.resolve().then(() => {
//  console.log("Promise");
// });
// console.log("e");

Q5.
console.log("1");

Promise.resolve().then(() => {
  console.log("2");
});

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

Q6.
setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });

}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

Q7.
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log("Error:", err));
  
