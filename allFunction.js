function add(a, b) {
  return a + b;
}
const result = add(10, 20);
console.log("first result is : ", result);

// arrow function
const add1 = (a, b) => a + b;
const result1 = add(20, 30);
console.log("second result is : ", result1);

const mult = (a, b) => a * b;
const result2 = mult(10, 20);
console.log("third result is : ", result2);

// auto run function in js
(function () {
  console.log("hello world");
})();

// callBack funtion
function add2(a, b, callBack) {
  const result = a + b;
  console.log("fourth result is : ", result);
  callBack();
}
function callBack() {
  console.log("Now call back function called");
}

add2(100, 200, callBack);

function callback() {
  console.log("now you are okay for taking a admition in 12 class");
}

// call back funtion
const pass = function (a, callback) {
  const marks = a;
  if (marks > 33) {
    console.log("you are passed");
  } else {
    console.log("you are failed");
  }
  callback();
};

pass(35, callback);

// another way to define call back funtion
const sub = function (a, b, ashok) {
  console.log("substraction is : ", a - b);
  ashok();
};
sub(5, 2, function () {
  console.log("ashok is a callback function");
});

// another way to define call back funtion
const sub1 = (a, b, kumar) => {
  console.log("substraction is : ", a - b);
  kumar();
};
sub1(15, 2, () => {
  console.log("kumar is a callback function");
});
