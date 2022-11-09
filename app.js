const express = require("express");
const app = express();
app.use(express.static("public"));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get('/works', (req, res, next) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.get('/gallery', (req, res, next) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.get("*", (req, res) => {
  console.log(req);
  res.send("<h1>404 Not found</h1>")
});

app.listen(3000, () => {
  console.log("Server ready on port 3000");
});