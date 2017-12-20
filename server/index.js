const server = require('http').createServer()
const io = require('socket.io')(server, {path: '/'})

server.listen(50437)

io.on('connection', clientSocket => {
    console.log('Hello', clientSocket.id)

    clientSocket.on('message', message => {
        console.info(`[message] ${message.author} écrit : ${message.text}`)

        clientSocket.broadcast.emit('message', message)
    })
})

