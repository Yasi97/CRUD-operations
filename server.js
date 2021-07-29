const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const { set } = require('mongoose');
//const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017';
const DATABASE_NAME = "Student";

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
var database, collection;

const PORT = 8000;


app.listen(PORT, ()=>{
   MongoClient.connect(DB_URL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("Student_Details");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

app.get("/Student_Details", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.post("/Student_Details", (request, response) => {
    collection.insertOne(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

app.put("/Student_Details/:id", (request, response) => {
    let id = request.query.id;
    collection.findOneAndUpdate({ _id: id },
        { $set: request.body },
        { new: true, upsert: true, returnOriginal: false });
    response.status(200).send(true)
});

// app.delete("/Student_Details/Delete/:id",(request, response) =>{
//     let id = request.query.id;
//     collection.findByIdAndDelete({_id: id}))
// })

