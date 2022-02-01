const handleWrite = (err) => {
    if (err) {
        console.log(err);
      } else {
          console.log('File succesfully saved!');
      }
};

module.export = {
    handleWrite: handleWrite
};