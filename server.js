/* eslint-disable @typescript-eslint/no-require-imports */
// import { createServer } from 'http';
// import next from 'next';
// import url from 'url'; 
const { createServer } = require('http');
const next = require('next');
const url = require('url');

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); 
    handle(req, res, parsedUrl);
  }).listen(process.env.PORT || 3000, () => {
    console.log('Server running...');
  });
});
