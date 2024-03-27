const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World, from gcloud GCP Cloud Run");
});

app.post("/", (req, res) => {
  if (req.body) {
    const num1 = req.body.y;
    const num2 = req.body.x;

    const result = num1 * num2;

    const response = {
      X: num1,
      Y: num2,
      result: result,
    };

    // Send the JSON response
    res.json(response);
  } else {
    // If no body is found in the request
    res.status(400).send("No JSON body found in the request.");
  }
});

app.listen(8080, () => {
  console.log("Server is up on 8080");
});