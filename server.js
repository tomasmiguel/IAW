const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static('./dist/final-iaw/browser'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './../dist/final-iaw/browser/index.html'));
  console.log('path', path.join(__dirname, './../dist/final-iaw/browser/index.html'));
});

app.listen(process.env.PORT || 8080);
