


















//importing files
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
import express = require('express');
const app = express();

app.get('/bmi/:height/:weight', (req, res) => {
  const object = {
    "height": parseInt(req.params.height),
    "weight": parseInt(req.params.weight)
  };

  const data = calculateBmi(object.height, object.weight);
  res.send(data);
});

app.get('/hello', (_req, res) => {
  res.send('Hello full stack!');
});


app.post('/calculateExercise/:dailyHours/:target', (req, res) => {
    console.log('inside POST');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment 
  

    // splitting dailyHours in a array
    const array = req.params.dailyHours.split(',');
    // converting array of string to number
    const numberArray = array.map(Number);
  
    // target to variable
    const target = parseInt(req.params.target);
    try {
    const result = calculateExercises(numberArray, target);
    res.send(result);
  } catch (error) {
    console.error({
      error: "parameter missing"
    });
    res.status(500).json({ error: 'An error occurred while calculating exercises.' });
  }


  });



const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






























