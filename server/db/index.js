const mongoose = require('mongoose');

const dbName = 'thisnow';
const url = `mongodb://localhost:27017/${dbName}`;


async function main () {
  try {
    await mongoose.connect(url);
    console.log('Connected successfully to server');
    return 'done.';
    
  } catch (error) {
    console.log('Couldnt connect with the db:', error)
  }
}
main();


module.exports = mongoose;