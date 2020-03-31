const MongoClient = require('mongodb').MongoClient;


const url = "mongodb://localhost:27017/";
MongoClient.connect(url,(err,db)=> {
    let dbo = db.db("kuic");
    dbo.createCollection("interns",(err,res) => {
        if(err)throw err;
        console.log("interns collection created");
        db.close();
    })
});