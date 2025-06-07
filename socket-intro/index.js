const express = require('express')
const app = express()
const socketio = require('socket.io')

app.use(express.static(__dirname + '/public'))

const server  = app.listen(8000)

const io = socketio(server)

io.on('connection', (socket) => {
    console.log(`${socket.id} has connected`)

    socket.emit('messageFromServer', { data: 'Serving is sending its hello greetings'})
})