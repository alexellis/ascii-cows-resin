var express = require('express');
var app = express();
var cows = require('cows')
var all = cows();

function show(cow) {
    var cowText = all[cow];
    return cowText;
}

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  var randomCow = Math.floor((Math.random() * all.length) + 1);
  show(randomCow);

  res.send(show(randomCow));
});

//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});
