Prepare and practice explaining the following topics for interview discussions.
1. callback function 
2. drawbacks of callback hell
3. What is promises in js

Find out the output and the prepare the reason behind them

//task-1
console.log("A");

new Promise((resolve) => {
  console.log("B");
  resolve();
  console.log("C");
}).then(() => {
  console.log("D");
});

console.log("E");

//task-2
for(var i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}

//task-3
console.log([2]==[2]) 
console.log([2]===[2])

console.log({}=={})
console.log({}==={})
