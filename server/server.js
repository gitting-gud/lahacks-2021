const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(express.json());

const url = `mongodb+srv://ayu:kEALvf9GlP2p52Zf@lahacks.dqfhp.mongodb.net/`;
//myFirstDatabase?retryWrites=true&w=majority
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("myFirstDatabase");
    dbo.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});