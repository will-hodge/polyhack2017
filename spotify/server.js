import express from 'express';
import request from 'request';
import querystring from 'querystring';
import cookieParser from 'cookie-parser';
import config from 'config';

const server = express();

server.get('/', (req, res) => {
  res.render('index', {
  });
});


server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});

let client_id = 'CLIENT_ID'; // Your client id
let client_secret = 'CLIENT_SECRET'; // Your secret
let redirect_uri = 'REDIRECT_URI'; // Your redirect uri
