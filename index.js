const express = require("express");
const path = require("path")
const notesJSON = require("./db/db.json");

console.log(notesJSON);
const app = express();
const PORT = 3000;
//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded())

//serve static 
app.use(express.static("public"));


 //API ROUTES//(save/rewrite and load)

 //get API notes
 app.get("/api/notes", (req, res) => {
    res.json(notesJSON)
 });
 
 //Post API notes
 app.post("/api/notes", (req, res) => {
    notesJSON.push(req.body)
    res.json(notesJSON.length -1)
 });

//HTML routes
app.get("/notes", (req, res)=> res.sendFile(path.join(__dirname, "public/notes.html")));
app.get("*", (req, res)=> res.send("404"));

//Start listening 
app.listen(PORT, ()=> console.log("server running on http://localhost:3000"));