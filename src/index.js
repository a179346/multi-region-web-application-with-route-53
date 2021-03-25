require('./system/initEnv');
require('./utils/plog');
const express = require('express');
const cors = require('cors');
const nocache = require('nocache');

const app = express();
app.enable('trust proxy');
app.use(nocache());
app.use(cors());

app.get('/ok', (req, res) => {
  res.send('ok');
});

app.use((req, res) => {
  const region = process.env.REGION;
  res.send('Hello from ' + region + '!');
});

app.listen(process.env.PORT, () => {
  console.plog('server is listening');
});