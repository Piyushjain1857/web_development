// let sentence = "I am a comma separated sentence";
// console.log(sentence.length);
// let words = sentence.split("a");
// console.log(words)

// Q1. count the occurance of "r" in the given String.

// let str = "tu meri me tera me tera tu meri";
// console.log(str.split("r").length-1)


// first class function

// function test(a){
//     console.log("test")
//     return function test2(b){
//         console.log("test2")
//         return function test3(c){
//             console.log("test3")
//         }
//     }
// }
// test()()()
// let value=test(10)
// let value2=value();
// value2(15)

// Anonymous function 

// Map(function(){

// })

// self invoking function

// function demo(){
//     console.log("demo")
// }
// let a=10;
// console.log(a)
// function sample2(){
//     demo()
// }
// sample2()

(function(){
    let a=10;
    console.log(a)
})()
console.log(a) //cant access a

(function(){
    let a=10;
    b=a;
    console.log(a)
})()
console.log(b) //can access a a variable after assignment

