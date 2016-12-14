"use strict"

let express = require('express');
let app = express();
let cows = require('cows')
let all = cows();

let show = (cow) => {
    var cowText = all[cow];
    return cowText;
}

app.get('/', function (req, res) {
  var randomCow = Math.floor((Math.random() * all.length) + 1);
  if(req.headers.accept &&
    req.headers.accept.indexOf("text/html") > -1) {
    res.send("<pre>"+show(randomCow)+"</pre>");
  }
  else {
    res.send(show(randomCow));
  }
});

var server = app.listen(80, function () {
  var port = server.address().port;
  console.log('Listening on port ', port);
});
