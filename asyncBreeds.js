// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, cb) {

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    cb(data);
  });
  
};

module.exports = breedDetailsFromFile;