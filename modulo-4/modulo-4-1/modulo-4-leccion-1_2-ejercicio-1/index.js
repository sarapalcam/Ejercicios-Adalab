const fs = require('fs');

const add = (a, b) => {
    return a + b;
}

console.log(add(4, 8));

const myObject = {
    user: "Mari Carmen",
    email: "mari@gmail.com",
    age: 28,
  };

console.log(myObject);

console.log(JSON.stringify(myObject));

fs.writeFile(
    "./output.txt",
    JSON.stringify(myObject),
    err => {
        if(err){
            console.log('error', err);
        } else {
            console.log('The file has been saved');
        }
    }
  );