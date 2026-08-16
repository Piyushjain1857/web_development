//  regular function
 
// function sum(){
//             let a=10;
//             let b=20;
//             console.log(a+b)
//         }
// sum()

// Arrow function
const sum=(a,b)=>{
    console.log(a+b);
}
sum(5,10)


// Asynchnronous function:
// we can move to another task before the previous one finishes its execution


// callback: if we pass one function as an argument inside another function 
function sample(callback){
    console.log("sample");
    callback()
}
function demo(){
    console.log("demo")
}

sample(demo)

