console.log("Hola Mundo");
//const  http = require('http');
const express = require('express');
const app = express();
const Formulario = require('./js/replit.js');
const stampit = require("stampit");
const QUnit = require('qunit');

//------------------------------------------------

app.use(express.static(__dirname+'/'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/html/index.html');
});
app.listen(4000, function() {
    console.log('Example app listening on port 3000!');
});


