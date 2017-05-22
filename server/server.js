const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const busboyBodyParser = require('busboy-body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();

// Uncomment to use docs in mock server
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(`${__dirname}/docs`));
}

app.use(compression());

app.use(cookieParser());

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(busboyBodyParser());

app.use((req, res, next) => {
  const origin = (req.headers.origin || '*');
  if (req.method.toUpperCase() === 'OPTIONS') {
    res.writeHead('204', 'No Content', {
      'access-control-allow-origin': origin,
      'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'access-control-allow-headers': 'authorization, x-api-version, content-type, accept',
      'access-control-max-age': 10, // Seconds.
      'content-length': 0 }
    );
    return res.end();
  }

  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Headers',
    'Authorization, Origin, X-Requested-With, Content-Type, Accept');

  next();
});

app.use(routes);

module.exports = app;
