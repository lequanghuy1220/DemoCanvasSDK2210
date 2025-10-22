const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
 
const app = express();
const PORT = process.env.PORT || 3000;
 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
 
// Root route
app.get("/", (req, res) => {
  res.render("index");
});
 
// Salesforce Canvas Signed Request
app.post("/", (req, res) => {
  const signedRequest = req.body.signed_request;
  res.render("index", { signedRequest });
});
 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});