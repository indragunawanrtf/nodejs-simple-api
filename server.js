const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// Connect to mLab
mongoose.connect('mongodb://indragunawanrtf:admin@ds247699.mlab.com:47699/nodejs-simple-api', {});
app.use(bodyParser.json());

// Routes For CRUD Data API
const product = require('./controllers/vehicle')(app);
const customer = require('./controllers/customer')(app);

app.get('/',  (req,res) => {
  res.send('OK')
});

app.listen(3000, () => {
  console.log('Server is Running...')
});