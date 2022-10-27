import express from 'express';
import exceptionHandler from './middlewares/exceptionHandler';
import router from './routes';
import 'express-async-errors';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();
app.use(express.json());
app.use(router);
app.use(exceptionHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('App listening on port ' + port));