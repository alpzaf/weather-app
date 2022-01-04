require("dotenv").config();
const express = require("express");
const qs = require("qs");
const axios = require("axios");
const app = express();
const port = 3000;

const apiURL = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = process.env.API_KEY;

app.get("/", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  let query = request.query;
  query.appid = apiKey;
  let queryString = qs.stringify(query);
  axios(`${apiURL}?${queryString}`).then((res) => {
    response.send(res.data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
