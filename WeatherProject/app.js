const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req,res) {

  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=5e6795f34c43a1af13a04d517c610b9c"
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDesc = weatherData.weather[0].description
      console.log(weatherDesc);

    })
  })

  res.send("Server is up and running.");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
})
