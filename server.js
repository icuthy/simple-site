var express = require("express"),
app = express();

app.get("/", function (req, res) {
  res.send("hello universe!");	
});

console.log("server starting. available at http://localhost:3000");
app. listen(3000);

var quotes = [ "A journey of a thousand miles begins with a single step.",
  "A life lived in fear... is a life half-lived.",
  "We don't see things as they are, we see them as we are.",
  "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.",
  "Would you excuse me? I cut my foot before and my shoe is filling up with blood."];

app.get("/inspiration", function (req, res) {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  res.send(quotes[randomIndex]);	
});

var jokes = [{"setup": "What is red and invisible?", "punchline": "No tomatoes"},
  {"setup": "What do you call a cow with no legs?", "punchline": "Ground beef."},
  {"setup": "What do you get when you cross a joke with a rhetorical question?", "punchline": ""}];

app.get("/joke", function (req, res) {
  var randomIndex = Math.floor(Math.random() * jokes.length);
  res.send(jokes[randomIndex]);	
});
