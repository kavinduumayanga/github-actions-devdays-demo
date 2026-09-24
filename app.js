const express = require('express');
const path = require('node:path');
const { version } = require('./package.json');

const app = express();

app.get('/health', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({ status: 'UP', application: 'DevLaunch', version });
});

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
