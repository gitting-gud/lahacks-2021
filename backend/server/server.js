const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const users = require('./routes/users');
const businesses = require('./routes/businesses');
const stampCards = require('./routes/stampCards');
const campaigns = require('./routes/campaign');
const userCards = require('./routes/userCards');
const app = express();

const url = `mongodb+srv://ayu:kEALvf9GlP2p52Zf@lahacks.dqfhp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

app.use(cors());
app.use(express.json());

app.use('/api/users', users);
app.use('/api/businesses', businesses);
app.use('/api/stampCards', stampCards);
app.use('/api/campaign', campaigns);
app.use('/api/userCards', userCards);

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

app.listen(4000, () => {
    console.log(`Starting server on port 4000`);
  });

// const connectionParams = {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// }

// mongoose.connect(url, function (err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
// });

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("myFirstDatabase");
//     try {
//         dbo.createCollection("customers", function (err, res) {
//             if (err) throw err;
//             console.log("Collection created!");
//             db.close();
//         });
//     }
//     finally {
        
//     }
// });

