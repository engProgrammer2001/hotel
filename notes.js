console.log("this is notes file for javascript");

const age = 20;
const addNumber = function (a, b) {
  return a + b;
};

module.exports = {
  age,
  addNumber,
};


const notes = require('./notes.js')
const lodash = require('lodash');

console.log("server running sucessfully");

const age1 = notes.age;
const result = notes.addNumber(age1+40,30);
console.log("result is : ",result);


// it will print uniqArr 
const arr = [1,2,3,1,2,"ashok","name","ashok","2","name"];
const uniqArr = lodash.uniq(arr);
console.log(uniqArr);


// convert json to object 
const jsonString = '{"name":"ashok","age":20}';
const obj = JSON.parse(jsonString);
console.log("object String is : ",obj);

// convert object to json 
const objectToConvert = {name:'Alice', age:30};
const json = JSON.stringify(objectToConvert);
console.log("json is : ",json)