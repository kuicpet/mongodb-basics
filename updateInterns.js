const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/";

MongoClient.connect(url,(err,db) => {
    let dbo = db.db("kuic");
    let myQuery = {movie:"The Banker"};
    let newValues = {$set:{movie: "The Matrix",year: 2007,rating: 8}};
    dbo.collection("myMovies").updateOne(myQuery,newValues,(err,res) => {
        if(err) throw err;
        console.log("1 document Updated!");
        dbo.collection("myMovies").find({}).toArray((err,res) => {
            if(err) throw err;
            console.log(res);
        })
        db.close();
    });
});