const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('welcome to home page');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the about me chanthuru ');
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('if like Contact me at chanthuruchanthuru77@example.com.');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('you not found the address');
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});