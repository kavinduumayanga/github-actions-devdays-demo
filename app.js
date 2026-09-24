const express = require('express');
const path = require('node:path');

const app = express();

app.get('/health', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({ status: 'UP', application: 'DevLaunch' });
});

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
