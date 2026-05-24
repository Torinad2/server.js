const http = require('http')

const server = http.createServer ((req, res) => {
    switch(req.url) {
        case '/home': {
            setTimeout(()=>{
                const data = 'best free fishing'
                res.write(data)
            },3000)

            break;
        }
        default: {
            res.write('404 not found')
        }
    }
    res.end()
})

server.listen(3003)