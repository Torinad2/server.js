const http = require('http')

let requestCount = 0

const server = http.createServer((request, response) => {

    if (request.url !== '/favicon.ico') {
        requestCount++
    }

    //console.log(request.url)

    switch (request.url) {
        case '/students':
            response.write('Students')
            break;
        case '/courses':
            response.write('Front and Back')
            break;
        case '/':
            response.write('Main Page')
            break;
        case '/favicon.ico':
            response.statusCode = 204
            response.end()
            return
        default:
            response.write('404 not found')
    }

    response.write(', Request = ' + requestCount )

    response.end()
})

server.listen(3003)


