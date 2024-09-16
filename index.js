const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const pages = ['/about', '/contact-me'];

http.createServer(function (req, res) {
    const q = url.parse(req.url, true);
    if (pages.includes(q.pathname)){
        q.pathname = path.join(q.pathname + ".html");
    }
    const filename = path.join(__dirname, q.pathname === '/' ? 'index.html':  q.pathname);

    fs.readFile(filename, function (err, data) {
        if (err) {
            console.error(`Error reading ${filename}:`, err); // Debugging line
            // Attempt to read 404.html
            fs.readFile(path.join(__dirname, '404.html'), function (err404, data404) {
                if (err404) {
                    console.error('Error reading 404.html:', err404); // Debugging line
                    // Respond with a generic 404 message if 404.html cannot be read
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('404 Not Found');
                } else {
                    // Serve the 404.html file
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(data404);
                }
            });
        } else {
            // Serve the requested file
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});