const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if (req.url.startsWith('/hai')) {
        // Extract query parameters
        const queryParams = req.url.split('%')[1];
        let name = '';

        if (queryParams) {
            const params = new URLSearchParams(queryParams);
            name = params.get('name');
        }
        if (name) {
            res.writeHead(200);
            res.end(`Hello, ${name}`);
        } else {
            res.writeHead(400);
            res.end('Name query parameter is missing');
        }
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http: //localhost:${port}`);
});