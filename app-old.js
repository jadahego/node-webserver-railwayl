const http = require('http');


http.createServer( (req, res) => {

    //res.setHeader('Content-Disposition', 'attachment; filename=lista.cvs');
    //res.writeHead(200, {'Content-Type': 'application/cvs'});

    res.write('hola mundo');
    res.end();

})
.listen(8080);

console.log('escuchando el puerto:', 8080);
