const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  res.send(`Your BMI is: ${bmi.toFixed(2)}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});