// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const dbJson = require("./db/db.json");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public\index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public\notes.html"));
});

app.get("/api/notes", function (req, res) {
    return res.json(dbJson);
});

app.post("api/notes", function (req, res) {
    console.log(req, body)
});

app.delete("api/notes/:id", function (req, res) {
    res.send("Delete request at /user")
});

app.get("*", function (req, res) {
    res.sendFile(path.join(_dirname, index.html))
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
})