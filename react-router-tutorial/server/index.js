const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.resolve(__dirname, '../build')));

app.get('*', (req, res, next) => {
  console.log(req.path.split('/')[1]);
  if (req.path.split('/')[1] === 'static') return next();

  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(4000, () => {
  console.log('Example server listening port 4000');
});
