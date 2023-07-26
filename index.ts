



















import { calculateBmi } from './bmiCalculator';


import express = require('express');
const app = express();

app.get('/bmi/:height/:weight', (req, res) => {
  const object = {
    "height": parseInt(req.params.height),
    "weight": parseInt(req.params.weight)
  }
  
  const data = calculateBmi(object.height, object.weight)
  res.send(data);
});

app.get('/hello', (_req, res) => {
  res.send('Hello full stack!')
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






























