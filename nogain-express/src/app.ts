import express from 'express';
const bodyParser = require('body-parser');

// let express = require('express');
const employeeRoutes = require('./routes/employee-routes');


const app = express();

const port = 5000;

app.use(bodyParser.json());

app.use("api/employee", employeeRoutes);


app.use((req, res, next) => {
  const error = new HttpError('Not found',404);
  throw error;
})




app.listen(port);