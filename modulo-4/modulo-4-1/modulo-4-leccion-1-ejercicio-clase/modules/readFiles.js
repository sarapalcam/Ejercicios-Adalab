const handleRead = (err, fileContent) => {
    if (err) {
      console.log(err);
    } else {
      //console.log(fileContent);
      //El \n me divide por saltos de línea
      const lines = fileContent.split('\n');
      console.log(lines);
      //console.log(lines.length);
      lines.forEach(line => {
         if(line.includes('Noelia')){
             //console.log(line);
         } 
      })
     const rosa = lines.find(line => line.includes('Rosa'));
     //console.log(rosa);
      ;
    }
  };

  const handleReadJson = (err, fileContent) => {
    if(err){
        console.log(err);
    } else{
        const dataObject = JSON.parse(fileContent);
        console.log(dataObject);
    }
   };

  module.exports = {
      handleRead: handleRead,
      handleReadJson: handleReadJson
  };