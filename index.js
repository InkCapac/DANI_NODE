const http = require("http");
const variable = "COME TO THE VALHALLA!";
http.createServer( (req, res) => {
    //Con esta línea << {'content-type': 'text/html'}); >> se indica que el contenido es text/html
    //El << 200 >> en un indicativo de error
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(`
    <html>
    <head>
    </head>
    <body>
    ${variable}
    <h1>WITNESS ME!!!</h1>
    <li>NO, I WON'T</li>
    <li>WITNESS YOU!</li>
    </body>
    </html>
    `);
    res.end();
}).listen(8080);