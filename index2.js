const http = require("http");
//La siguiente const permite leer archivos
const fs = require("fs");
http.createServer( (req, res) => {
    fs.readFile("index.html", (error, datos) => {
        if(error){
            //El << 500 >> indica un error interno
            res.writeHead(500);
            res.end("Error del servidor!!");
        }else{
            res.writeHead(200, {'Conten-Type': 'text/html'});
            res.write(datos);
            res.end();
        }
    })
}).listen(8080);