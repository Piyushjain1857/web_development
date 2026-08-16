
// map method
// let arr = [1,2,3,4,5]

// let result = arr.map((x)=>x)
// console.log(result);

// filter method
//  let scores = [12,7,22,15,32,6,4,27,11,16];
//  let highScores = 
//  scores.filter((score) =>{
//     if(score>=15){
//         console.log(score,"pass")
//     }
//     else{
//         console.log(score,"fail")
//     }
//  } );

//  reduce method
let numbers = [1, 2, 3, 4, 5];
// let sum=0;
// for(let i=0;i<numbers.length;i++){
//     sum = sum+numbers[i]
// }
let sum = numbers.reduce((acc, current) => acc+current);
console.log(sum)
// acc=1,index:0
// current:rest of the elements apart from index:0

