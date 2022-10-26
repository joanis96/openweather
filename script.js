// api key : 3d32ffd95e9094cbdc2a01b3989094c8

const { json } = require("express");
const express = require("express");
const https = require("https"); // it's native to node
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/index.html", function(req, res) {

    const query = req.body.cityName;
    const apiKey ="3d32ffd95e9094cbdc2a01b3989094c8";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey + "&units="+ unit;
    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const descp = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = " http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.send("<h1>The temperature in " + query + " is " + Math.round(temp) + " degrees Celcius. " + "The weather is currently " + descp + " <img src=" + imageURL + ">" + ".</h1>");
        });
    });
});

/*
    const query = "Montreal";
    const apiKey ="3d32ffd95e9094cbdc2a01b3989094c8";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey + "&units="+ unit;
    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const descp = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = " http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.send("<h1>The temperature in Montreal is " + Math.round(temp) + " degrees Celcius. " + "The weather is currently " + descp + " <img src=" + imageURL + ">" + ".</h1>");
        });
    });
 */

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});