const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');

const app = express();

// 1. Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Middleware express json is a function that can modify the incoming request data
app.use(express.json());

//to have access with public folder in the url
app.use(express.static(`${__dirname}/public`));

// app.use((req, res, next) => {
//   console.log('Hello from the middleware 🤬');
//   next();
// });

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

// 3. ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
