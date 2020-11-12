const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  const query = req.body.cityName;
  const apiKey = "5e6795f34c43a1af13a04d517c610b9c";
  const units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + units + "&appid=" + apiKey;
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDesc = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      res.write("<p>The weather is currently " + weatherDesc + "</p>");
      res.write("<h1>The temperature in " + query + " is " + temp + " degress Celcius.</h1>");
      res.write("<img src=" + imageURL + ">")
      res.send();
    })
  });

  // console.log("Post request received.")
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});

// const query = "London";
// const apiKey = "5e6795f34c43a1af13a04d517c610b9c";
// const units = "metric";
// const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + units + "&appid=" + apiKey;
// https.get(url, function(response) {
//   console.log(response.statusCode);
//
//   response.on("data", function(data) {
//     const weatherData = JSON.parse(data)
//     const temp = weatherData.main.temp
//     const weatherDesc = weatherData.weather[0].description
//     const icon = weatherData.weather[0].icon
//     const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
//     res.write("<p>The weather is currently " + weatherDesc + "</p>");
//     res.write("<h1>The temperature in London is " + temp + " degress Celcius.</h1>");
//     res.write("<img src=" + imageURL + ">")
//     res.send();
//   })
// });
