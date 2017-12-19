const server = require('http').createServer()
const io = require('socket.io')(server, {path: '/'})

server.listen(50437)

io.on('connection', socket => {
    console.log('Hello', socket.id)
})

