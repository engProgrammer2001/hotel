const fs = require("fs")
const os = require("os")


// os package 
const osUse = os.userInfo();
console.log("user is : ",osUse);
console.log("username is : ",osUse.username);


// fs package 
fs.appendFile("greeting.txt","hi dost kaise ho " + osUse.username + '!\n', ()=>{
    console.log("file created successfully");
})

// console.log(os)
// console.log(fs)

