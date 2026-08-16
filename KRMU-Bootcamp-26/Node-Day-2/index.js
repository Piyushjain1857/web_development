const express = require("express");
const app = express();
const port = 4040;
const data = require("./data");

// Handling GET requests
app.get("/", (req, res) => {
  res.send("Hello, Express! This is a GET request.");
});

app.get("/bollywood", (req, res) => {
  // res.send(data);
  const result = data.filter((item) => item.category === "Bollywood");
  res.send(result);
});

app.get("/hollywood", (req, res) => {
  const userId = req.params.id;
  res.send(`This is a PUT request for user with ID ${userId}`);
});

app.get("/food", (req, res) => {
  const foodData = data.filter((item)=>item.category === "Food")
  res.send(foodData)
});

app.all("/other", (req, res) => {
  res.send(`This is a ${req.method} request.`);
});

// Start the server
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});