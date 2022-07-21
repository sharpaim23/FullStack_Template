const mongoose = require('mongoose')
const testSchema = new mongoose.Schema({
  //This is where database is shaped
  //Any type of requirements can be added here
  //This is allow for the data to be structured the way it is set up
  item1: {
    type: String
  },
  item2: {
    type: String
  }
})
//Export the data from the specified collection inside the specified database
//If the specific collection is not named Mongoose will create a test collection with an added 's' automatically
module.exports = mongoose.model('TestModel', testSchema, 'test_collection')