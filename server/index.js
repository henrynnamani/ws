const http = require('http')

const CONSTANTS = require('./custom-library/websocket_constants')
const METHODS = require('./custom-library/websocket_methods')

const server = http.createServer((req, res) => {
    vehicle;
    res.writeHead(200)
    res.end("Working with Nodejs again!")
})

server.listen(CONSTANTS.PORT, () => {
    console.log('Server is running!!!')
})


server.on('upgrade', (req, socket, head) => {
    console.log(req);
})

CONSTANTS.CUSTOM_ERRORS.forEach((errorEvent) => {
    process.on(errorEvent, (err) => {
        console.log(`code error event: ${errorEvent}: Has error: ${err}`)
        process.exit(1)
    })
})