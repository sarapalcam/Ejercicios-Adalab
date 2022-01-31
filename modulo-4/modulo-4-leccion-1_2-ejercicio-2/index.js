const fs = require('fs');

const readFile = (fileName, callback) => {
  fs.readFile(fileName, 'utf8', (err, fileContent) => {
    if (err) {
      console.log('Error', err);
    } else {
      callback(fileContent);
    }
  });
};

const writeFile = (fileName, fileContent, callback) => {
    fs.writeFile(fileName, fileContent, err => {
        if(err){
            console.log('Error', err);
        } else {
            callback();
        };
    });
};

readFile('./input-file.json', (inputContent) => {
    const file = JSON.parse(inputContent);
 file.age = 40;
 writeFile('output-file.json', JSON.stringify(file), () => {
     console.log('The file has been succesfully copied!');
 })
})

