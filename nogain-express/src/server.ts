import 'reflect-metadata';
import express from 'express';
import { router } from './routes/users-routes';


const app = express();

app.use(express.json());
app.use(router)

app.listen(4003,() => console.log("server is running on port 4003"));


// const bodyParser = require('body-parser');
// const HttpError = require('./models/http-error');

// let express = require('express');
// const employeeRoutes = require('./routes/employee-routes');


// const app = express();

// const port = 3000;

// app.use(bodyParser.json());




// app.use((req, res, next) => {
//   const error = new HttpError('Not found',404);
//   throw error;
// })




// app.listen(port);