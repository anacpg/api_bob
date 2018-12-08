import express from 'express';
import { LogProvider } from './providers';
import routes from './routes';

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const APP_PORT = 4000;
const app = express();

mongoose.connect('mongodb://localhost:27017/bob', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.end();
  }
  next();
});

app.listen(APP_PORT, () => {
  LogProvider.info(`App listening on port ${APP_PORT}`); // eslint-disable-line no-console
});

app.use('/', routes);
