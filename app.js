const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

const imgFile = "cat2.jpg";

app.get('/', (req, res) => {
  fs.readFile("static/index.html", "utf8", function (err, data) {
    if (err) throw err;
    setTimeout(function () {
      res.send(data);
    }, 3000);
  });
});

app.get('/img/nocache.jpg', (req, res) => {
  respondWithImage(res);
});

app.get('/img/cache.jpg', (req, res) => {
  respondWithImage(res);
})

function respondWithImage(res) {
  setTimeout(function () {
    var options = {
      root: __dirname + '/static/img/',
      dotfiles: 'deny',
      cacheControl: false
    };
    res.sendFile(imgFile, options, (err) => {
      console.log(err);
    });
  }, 1000);
}



app.get('/home.js', (req, res) => {
  fs.readFile("static/home.js", "utf8", function (err, data) {
    if (err) throw err;
    res.setHeader('Content-type', 'application/javascript; charset=utf-8');
    res.send(data);
  });
});

app.get('/service-worker.js', (req, res) => {
  fs.readFile("static/service-worker.js", "utf8", function (err, data) {
    if (err) throw err;
    res.setHeader('Content-type', 'application/javascript; charset=utf-8');
    res.send(data);
  });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))