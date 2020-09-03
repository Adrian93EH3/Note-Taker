// DEPENDENCIES
// =============================================================
const express = require("express");
const path = require("path");
const dbPath = require("./db/db.json");
const fs = require("fs");

// SETS UP THE EXPRESS APP
// =============================================================
const app = express();
const PORT = process.env.PORT || 8000;

// SETS UP THE EXPRESS DATA TO HANDLE THE DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTES DOWN BELOW
// =============================================================

// BASIC ROUTE THATS SENDS THE USER FIRST TO THE AJAX PAGE

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", function (req, res) {
    res.json(dbPath);
});

app.post("/api/notes", function(req, res) {
    const note = req.body;
    note.id = dbPath.length + 1;
    dbPath.push(note)

    // FOLLOWING CODE SAVES THE NOTE TO THE FRONT-END
    fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify(dbPath), "utf8", function(err) {
        if(err) throw err;
        res.json(dbPath)
    })
});

// COMING BACK FOR FUTURE DEVELOPMENT, THIS IS MY ATTEMPT AT THE DELETE
app.delete("api/notes/:id", function (req, res) {
    res.deleteFile("Delete request at /user");
    const noteDelete = req.body;
    noteDelete.id = dbPathlength -= 1;
    dbPath.push(noteDelete)

   
    fs.deleteFile(path.join(__dirname, "./db/db.json"), JSON.stringify(dbPath), "utf8", function(err) {
        if(err) throw err;
        res.json(dbPath)
    })
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, index.html))
});

// STARTS THE SERVER TO BEGIN LISTENING
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT)
});