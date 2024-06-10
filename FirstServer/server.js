const http = require('http')

let requestCount = 0;

const server = http.createServer((request, response) => {

    requestCount++;
    switch (request.url) {
        case '/':
            response.write('HOME PAGE ')
            break;
        case '/students':
            response.write('STUDENTS ')
            break;
        case '/courses':
            response.write('FRONT + BACK ')
            break;
        default:
            response.write('NOT FOUND URL!')
            break;
    }

    response.write('COUNTER = ' + requestCount);

    response.end();
})

server.listen('3003');