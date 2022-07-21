//npm init
//npm install express mongoose dotenv cors
//npm install nodemon --save-dev
// "start": "nodemon server.js" -package.json

//DECLARE VARIABLES
const express = require('express')
const app = express()
const Mongoose = require('mongoose')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
require('dotenv').config()
const PORT = 8000
const TestModel = require('./models/schema')

//MONGOOSE CONNECTION DATABASE
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true })
    console.log(`Connected to database: ${mongoose.connection.name}`);
  } catch (err) {
    console.log('Failed to connect', err);
  }
}
connectDB()

//MIDDLEWARE  
  app.set('view engine', 'ejs')
  app.use(express.static('public'))
  app.use(express.urlencoded({extended: true}))
  app.use(express.json())
  app.use(cors())

//GET METHODS
  app.get('/', async (req,res) => {
    try {
      //This is how the content is rendered back from the database
      //This will search for the model that is built
      const content = await TestModel.find()
      console.log(content);
      // Get data from database - specific collection
      // After data is found, then render ejs AND pass the data so that it can render on the page
      res.render('index.ejs', {contentKey: content})
  }catch(error){
      res.status(500).send({message: error.message});
    }
  })

  //PORT 8000
  app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server is listening on PORT`);
})