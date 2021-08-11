const http = require('http');
const fs = require('fs');

const notFound = './404.html'

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end(createNav() + '<h1>Home Page</h1>');
        return;
    } else if (req.url === '/contact') {
        res.end(createNav() + '<p>Contact Me</p>');
        return;
    } else if(req.url === '/about') {
        res.end(createNav() + '<p>About Me</p>');
        return;
    }
    const content = fs.readFileSync(notFound);
    res.statusCode = 404;
    res.end(content);
    return;
})

server.listen(8080, () => {
    console.log('listening to 8080');
})

function createNav() {
    return '<div><ul><li><a href="http://localhost:8080/">Home Page</a></li><li><a href="http://localhost:8080/about">About</a></li><li><a href="http://localhost:8080/contact">Contact Me</a></li></ul></div>'
}
