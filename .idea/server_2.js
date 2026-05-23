const http = require('http')

const server = http.createServer ((req, res) => {
    switch(req.url) {
        case '/home': {
            // 3 s
            const data = 'best free fishing'
            res.write(data)
            res.end()
            break
        }
        default: {
            res.write('404 not found')
            res.end()
        }
    }
})

server.listen(3003)