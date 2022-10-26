// api key : 3d32ffd95e9094cbdc2a01b3989094c8

const { json } = require("express");
const express = require("express");
const https = require("https"); // it's native to node
const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=3d32ffd95e9094cbdc2a01b3989094c8&units=metric&lang=fr";
    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const descp = weatherData.weather[0].description;
            console.log(temp);
            console.log(descp);
        });
    });
    res.send("Server is up and running.");
})

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});