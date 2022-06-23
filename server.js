const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')
require('dotenv').config()


let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'sample_mflix',
    collection 

MongoClient.connect(dbConnectionStr)
  .then(client => {
    console.log(`Connected to Database`);
    db = client.db(dbName)
    collection = db.collection('movies')
  })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server is listening on PORT`);
})