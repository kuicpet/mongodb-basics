const MongoClient = require('mongodb').MongoClient;


const url = "mongodb://localhost:27017/kuic";

MongoClient.connect(url,(err,db) => {
    const slackUsername = "kuic"
    if(err) throw err;
    console.log("Database created " + slackUsername);
    db.close();
});