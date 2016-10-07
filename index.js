var express = require('express');
var app = express();

 
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/views', function (req, res) {
  res.send('Htest!');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//added comments
