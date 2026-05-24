const http = require('http')
const fs = require('fs')

const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

const server = createServer((req, res) => {

    switch (req.url) {

        case '/home':
            fs.readFile('pages/about.html', (err, data) => {
                if (err) res.write('500, some error occured')
                else res.write(data)
                res.end()
            })
            break;

        case '/about': {
            await delay(3000)
            res.write('About Page')
            res.end()
            break;
        }
        default:
            res.write('404 not found')
            res.end()
    }
})

server.listen(3003)