window.onload = function() {

    document.addEventListener('keypress', function(event) {
        sendMessage('EVENT OCCURRED - key pressed...');
    }, false);
};

var socket = io.connect();

socket.on('connect', function() {
	console.log('connected');
});

socket.on('message', function(data) {
    document.querySelector('#main').innerHTML += data.message;
});

function sendMessage(message){
    socket.emit('message', message);
}
