const CONSTANTS = require('./websocket_constants')

function isOriginAllowed(origin) {
    return CONSTANTS.ALLOWED_ORIGIN.includes(origin)
}

function check(socket, upgradeHeaderCheck, methodCheck,  connectionHeaderCheck, originCheck) {
    if(upgradeHeaderCheck && methodCheck && connectionHeaderCheck && originCheck) {
        return true
    } else {
        const message = 'Bad Request: Does not match RFC 6455 specification'
        const msgLength = message.length
        const response = 'HTTP/1.1 400 Bad Request\r\n' +
        'Content-Type: text/plain\r\n' + 
        `Content-Length: ${msgLength}\r\n` +
        '\r\n' + message

        socket.write(message)
        socket.end()
    }

}


function createUpgradeHeaders() {
    let headers = [
        'HTTP/1.1 101 Switching Protocols',
        'Upgrade: websocket',
        'Connection: upgrade',
        'Sec-WebSocket-Accept',
    ]

    const upgradeHeaders = headers.join('\r\n') + '\r\n\r\n';
}

module.exports = {
    isOriginAllowed,
    check,
    createUpgradeHeaders
}
