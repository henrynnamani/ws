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
    const UpgradeHeaderCheck = req.headers['upgrade'].toLowerCase() === CONSTANTS.UPGRADE;

    const connectionHeaderCheck = req.headers['connection'].toLowerCase() === CONSTANTS.CONNECTION; // upgrade

    const methodCheck = req.method === CONSTANTS.METHOD;


    // origin check
    const originCheck = METHODS.isOriginAllowed(req.headers['origin'])

    if(METHODS.check(socket, UpgradeHeaderCheck, methodCheck, connectionHeaderCheck, originCheck)) {
        upgradeConnection(req, socket, head)
    }

    // console.log(UpgradeHeaderCheck);
})

CONSTANTS.CUSTOM_ERRORS.forEach((errorEvent) => {
    process.on(errorEvent, (err) => {
        console.log(`code error event: ${errorEvent}: Has error: ${err}`)
        process.exit(1)
    })
})

function upgradeConnection(req, socket, head) {
    console.log('Connection complies with RFC 6455 specification')
}