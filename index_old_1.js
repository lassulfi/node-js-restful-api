const http = require('http');

let server = http.createServer((req, res) => {
    console.log("URL: ", req.url);
    console.log("METHOD: ", req.method);

    switch(req.url){
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Welcome to Node JS Server</h1>');
            break;
        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(
                {users:[{
                    name: 'Luis Daniel Assulfi',
                    email: 'lassulfi@gmail.com',
                    id: 1
                }]}
            ));
            break;
    }
});

server.listen(3000, "127.0.0.1", ()=>{
    console.log("Server is running!");
});