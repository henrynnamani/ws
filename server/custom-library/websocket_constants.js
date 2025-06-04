module.exports = {
    PORT: 3000,
    CUSTOM_ERRORS: [
        'uncaughtException',
        'unhandledRejection',
        'SIGINT',
        'null'
    ],
    METHOD: "GET",
    VERSION: 13,
    CONNECTION: "upgrade",
    UPGRADE: "websocket",
    ALLOWED_ORIGIN: [
        'http://localhost:5500',
        'http://127.0.0.1:5500'
    ]
}