var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/timestamp', function(req, res, next) {
  var utcDate = new Date();
  utcDate = utcDate.toUTCString();
  var unixDate = Date.now();

  res.json({unix: unixDate, utc: utcDate});
});

app.get('/timestamp/:dateVal', function(req, res, next) {
  var dateVal = req.params.dateVal;

  if(isNaN(dateVal)) {
    var utcDate = new Date(dateVal);
    var unixDate = new Date(dateVal).getTime() / 1000;
    utcDate = utcDate.toUTCString();
  }
  else {
    var unixDate = dateVal;
    var utcDate = new Date(dateVal * 1000);
    utcDate = utcDate.toUTCString();
  }

  res.json({unix: unixDate, utc: utcDate});
});

app.listen(3000);