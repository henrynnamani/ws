// clients side connection

const socket = io('http://localhost:8001')

socket.on('connect', () => {
    socket.emit('clientConnect', 'I am connected')
})

socket.on('welcome', (data) => {
    console.log(data); // Hey, from server side
})

socket.on('nsList', (data) => {
    const namespacesDiv = document.querySelector('.namespaces')
    data.forEach((ns) => {
        namespacesDiv.innerHTML = `<div class="namespace" ns=${ns.name}><img
                    src=${ns.image}>
            </div>`
    })
})