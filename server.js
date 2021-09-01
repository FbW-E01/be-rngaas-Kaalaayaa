import http from 'http'


const server = http.createServer((req, res) => {
    const random = Math.floor(Math.random() * 500)
    res.end(random.toString())
})

server.listen(8081)