var express = require('express');
var app = express();
var http = require('http').Server(app);
var routes = require('./routes.js');

app.use(express.static(__dirname+ '/dist'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});

app.use('/', routes);
//app.use('/admin', routes);
//app.use('/admin/addcandidate', routes);
//app.use('/admin/approvevoter', routes);
//app.use('/admin/result', routes);
//app.use('/users', routes);
//app.use('/users/vote', routes);
//app.use('/users/voterregistration', routes);
//app.use('/users/results', routes);
//app.use('/login', routes);
//app.use('/register', routes);


http.listen(9001,"0.0.0.0", function(){
    console.log('listening on *:9001');
});