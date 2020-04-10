const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";

MongoClient.connect(url,(err,db) => {
    if(err) throw err;
    let dbo = db.db("kuic");
    dbo.collection("myMovies").find({},{projection:{ _id: 0,movie:1}}).toArray((err,res) => {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});