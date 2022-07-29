const express = require("express");
const app = express();
const PORT = process.env.PORT || 3333;
const path = require("path");

const api_routes = require("./routes/api_routes");

// Share Static/Browser Files
app.use(express.static(path.join(__dirname, "index")));
// Attach client form data to req.body object
app.use(express.urlencoded({ extended: true }));
// Allow express to parse json
app.use(express.json());
// Load Routes
//localhost:333/api
app.use("/api", api_routes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
