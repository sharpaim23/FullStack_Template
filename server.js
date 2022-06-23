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