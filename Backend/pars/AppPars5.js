const csv = require('csv-parser')
const fs = require('fs')

async function findAll() {

  const results = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream('../parsnew/data21.csv')
      .pipe(csv({}))
      .on('data', (data) => results.push(data))
      .on('end', () => {
        resolve(results);
      });
  })




  // return results;
}

module.exports = {
  findAll: findAll
} 