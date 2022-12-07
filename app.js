require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const app = express();

const { PORT = 3001, MONGO_DATABASE = 'mongodb://localhost:27017/risuto' } = process.env;

mongoose.connect(MONGO_DATABASE);

app.use(bodyParser.json());

app.use('/', router);

app.get('/', (req, res) => {
  res.send(req.query);
});

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`)
}) 