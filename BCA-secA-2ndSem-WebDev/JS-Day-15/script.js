
// callback hell
// Disadvantages of callback hell: 

// Print 1 to 5 in a duration of 1 second

setTimeout(() => {
    console.log("1");
    setTimeout(() => {
        console.log("2");
        setTimeout(() => {
            console.log("3");
            setTimeout(() => {
                console.log("4");
                setTimeout(() => {
                    console.log("5");
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

// Promise chaining
function pro(num){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(num);
            res()
        },1000)
    })
}
pro(1)
.then(()=>pro(2))
.then(()=>pro(3))
.then(()=>pro(4))
.then(()=>pro(5))


// Promise is introduced to overcome the disadvantages of callback hell

// 3 states
// 1.pending
// 2. fullfilled
// 3.rejected


// Promise consumers
// 1. .then(): when promise resolved it will go to the .then
// 2. .catch(): when promise rejected then it will go to .catch()

// const pro = new Promise((resolve,reject)=>{
//        let payment="true";
//        if(payment==="true"){
//         resolve("Dashboard Access")
//        }
//        else{
//         reject()
//        }
// })
// pro.then((res)=>{
//     console.log(res);
// })
// .catch(()=>console.log("Access denied"))

function pro() {
    return new Promise((resolve, reject) => {
        let payment = "true";
        if (payment === "true") {
            resolve("Dashboard Access")
        }
        else {
            reject()
        }
    })
}
pro()
    .then((res) => console.log(res))
    .catch(() => console.log("Access denied"))


// Interview Trap Outcome question

    function delay() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Timeout Done");
      resolve();
    }, 0);
  });
}

async function test() {
  console.log("Start");
  await delay();
  console.log("After Delay");
}

test();
console.log("End");


// Guess the output and Explanation 

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("First");
    })
    .then(() => {
        console.log("Second");
    });

console.log("End");