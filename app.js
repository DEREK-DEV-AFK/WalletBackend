/* eslint-disable no-undef */
import express from 'express';
import dotenv from 'dotenv';

import logger from './src/api/logger/index.js';

import userRoute from './src/api/routes/user.route.js';
import otpRoute from './src/api/routes/otp.route.js';
import transactionRoute from './src/api/routes/transaction.route.js';
import invalidRoute from './src/api/routes/invalid.route.js';
import verifyUser from './src/api/middlewares/jwt.middleware.js';

dotenv.config();

const app = express();

// req input phraser
app.use(express.json());

// jwt token and session checker
app.use(verifyUser);

// user routes
app.use(userRoute);

// transaction routes
app.use(transactionRoute);

// otp routes
app.use(otpRoute);

// invalid route handler
app.use(invalidRoute);

app.get('/', (req, res) => {
    res.send('Hey');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    logger.info(`App listening to http://localhost:${PORT}`)
);
