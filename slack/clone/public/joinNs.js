    const joinNs = (element, data) => {
        const nsEndpoint = element.getAttribute('ns')

            const clickedNs = data.find((row) => row.endpoint === nsEndpoint)
            const rooms = clickedNs.rooms

            console.log(clickedNs)

            const roomList = document.querySelector('.room-list')

            roomList.innerHTML = ""

            rooms.forEach((room) => {
                roomList.innerHTML += `<li><span class="glyphicon glyphicon-lock"></span>${room.title}</li>`
            })
    }