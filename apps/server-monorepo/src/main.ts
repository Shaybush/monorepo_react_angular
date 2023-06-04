/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const http = require("http");

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/users', (req, res) => {
  res.send({ message: 'Hello API' });
});

const server = http.createServer(app);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
