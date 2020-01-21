const ws = new WebSocket("ws://localhost:8080");

// Connection opened
ws.addEventListener('open', function (event) {
    ws.send('Hello Server!');
});

// Listen for messages
ws.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});

let _sendButton = document.getElementById("sendButton");
_sendButton.onclick = function() {ws.send('Hello Server!');};
