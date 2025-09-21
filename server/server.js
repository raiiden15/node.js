const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 8080
// create server always listens on the port for some kind of incoming traffic
const server = http.createServer((req, res) => {
    const filepath = path.join(__dirname, req.url === '/' ? "index.html" : "req.url") // gives access to current directory. gives path of wherever the files are. 

    const extName = String(path.extname(filepath)).toLowerCase();

    const mimeType = {
        '.html': 'text/html',
        '.css': 'text/css', 
        '.js': 'text/javascript',
        '.png': 'text/png'
    }

    const contentType = mimeType[extName] || 'application/octet-stream';

    // here we are first concerned about the error part. this is the general structure that we follow. 
    fs.readFile(filepath, (err, content) => {
        if (err) {

        } else {
            res.writeHead
        }
    })
})

// parameters are port and callback - in which we define after listening what should the server do.
server.listen(port, () => {
    console.log("server is listening on " + port);
    
})
