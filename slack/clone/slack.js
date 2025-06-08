const express = require('express');
const app = express();
// require('socket.io') = Server in the docs
const socketio = require('socket.io')

const namespaces = require('./data/namespace')

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(8001);
// io = the server object in the docs!

const io = socketio(expressServer)

io.on('connection', (socket) => {
    // socket.emit('welcome', 'Hey, from server side')
    socket.on('clientConnect', (data) => {
        console.log(socket.id, 'is connected')
    })
    socket.emit('nsList', namespaces)
})

