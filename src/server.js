
'use strict';

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var nodemailer = require('nodemailer');

var port = process.env.PORT || 5000;

app.use(express.static('./src/client/'));
app.use(express.static('./'));
app.use(express.static('./.tmp'));
app.use('/*', express.static('./src/client/index.html'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/sendMail', function(req, res) {
  var transporter = nodemailer.createTransport('smtps://username%40gmail.com:password@smtp.gmail.com');
  var data = req.body;
  var mailOptions = {
    from: data.contactEmail,
    to: 'contact@deshaisarmand.fr',
    subject: 'Email sent by ' + data.contactName,
    text: data.contactMessage
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    console.log('Data:' + data.contactName);
  });
  res.json(data);
});

app.listen(port, function () {
  console.log('Express app listening on port: ' + port);
  console.log(__dirname);
});
