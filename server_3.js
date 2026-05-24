const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    switch(req.url) {
        case '/home':
            const data = fs.readFile('pages/about.html')
            res.write(data)
            break;
        default:
            res.write('404 not found')
    }
    res.end()
})

server.listen(3003)
