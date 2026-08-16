const str = "JavaScript is amazing!";
const sub = str.slice(-2, 2); 
console.log(sub)

// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// const indexOfFirst = paragraph. substring(40,3);
// console.log(indexOfFirst);



let firstName = "John";
let lastName = "Doe";
// let fullName = firstName.concat(" ", lastName); 
// let fullName= firstName +" "+ lastName

// string literals
let fullName= `${firstName}: this is my firstname, ${lastName}:this is my last name`
console.log(fullName);

let university="K.R Mangalam";
let program = "BCA AI/DS";
console.log("My name is S.P Acharya and im pursuing"+" "+ program+ " from " + university)

console.log(`my name is s.p Acharya and im pursuing ${program} from ${university}`);


let arr=[1,2,3]
let arr2=[4,5,6]
let newArray = [...arr,...arr2];
console.log(newArray);


