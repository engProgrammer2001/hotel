
var a = 5;
var b = 10;
console.log("Add is: ",a+b);
// console.log("this is ashok kumar kushwaha and it's a javascript code")


const name = "ashok"
// name = "rahul" // we can not change on const variable
console.log(name);
console.log("type of variable: ",typeof(name));


const arr = [1,2,3,4,5,6];
console.log(arr);
console.log("length of array: ",arr.length);
console.log("type of array: ",typeof(arr));


var age = 15;
if(age >= 18){
    console.log("you are eligible to vote");
}
else{
    console.log("you are not eligible to vote");
}


var a = 1;
for(a=1; a<=10; a++){
    console.log(a);
}

// object 
const person = {
    name : "ashok",
    age : 21,
    isStudent: false,
    address : "pune",
    hobbies : ["music","cricket","badminton"],
}
console.log(person.isStudent);
console.log(person.hobbies[2]);


// filter 
const ages = [23,21,45,20,30,31];
const result = ages.filter((a)=>{
    return a>21;
})
console.log(result)



// input from user 
var prompt  = require('prompt-sync')();
const name1 = prompt("enter your name");
if(name = "ashok"){
    console.log("welcome to our website");
}
else{
    console.log("you are not allowed");
}

console.log(name1);


