const http = require('http')
const webSocket = require('ws')

const server = http.createServer((req, res) => {
    res.end('server created!!!')
})

const wss = new webSocket.WebSocketServer({ // http bootstraps ws
    server
})

wss.on('headers', (headers, req) => {
    // console.log(headers)
})

wss.on('connection', (ws, req) => {
    console.log(ws)
})

server.listen(8000, () => {
    console.log('working!!!')
})