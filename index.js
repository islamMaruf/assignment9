const express = require('express');
const app = express();
const { doMathThings } = require('./calculate');

app.get('/', (req, res) => res.send('Hello, SonarQube!'));

app.get('/calculate', (req, res) => {
    const result = doMathThings(5, 5);
    res.send(`Result is ${result}`);
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));