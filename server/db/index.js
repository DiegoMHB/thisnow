const mongoose = require('mongoose');

const dbName = 'thisnow';
const url = `mongodb://localhost:27017/${dbName}`;


async function main () {
  await mongoose.connect(url);
  console.log('Connected successfully to server');

  return 'done.';
}
main();


module.exports = mongoose;