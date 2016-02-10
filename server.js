var http = require('http');
var express = require('express');
var jade = require('jade');

var app = express();

var server = http.createServer(app);

var io = require('socket.io').listen(server);


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    response.render('index.jade');
});

io.sockets.on('connection', function (socket) {

    socket.on('message', function (data) {

        var transmit = {message: data};
        socket.broadcast.emit('message', transmit);

    });

    socket.on('disconnect', function () {
        console.log("disconnect...");
    });

});


server.listen(12345);
