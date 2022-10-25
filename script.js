// api key : 3d32ffd95e9094cbdc2a01b3989094c8

const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Server is up and running.");
})

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
})