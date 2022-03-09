import 'reflect-metadata';
import express from 'express';
import { employeeRouter } from './routes/userRoute';

import {HttpError} from './models/http-error';	
import bodyParser from 'body-parser';


const app = express();

// app.use(express.json());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});





app.use("/api", employeeRouter)

// app.listen(4003,() => console.log("server is running on port 4003"));


// const bodyParser = require('body-parser');

// let express = require('express');
// const employeeRoutes = require('./routes/employee-routes');


// const app = express();

// const port = 3000;

// app.use(bodyParser.json());




app.use((req, res, next) => {
  const error = new HttpError('Not found', 404);
  throw error;
})



app.listen(4003, () => console.log("server is running on port 4003"));