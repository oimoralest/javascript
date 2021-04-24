const http = require('http');
const fs = require('fs');

/**
 * Creates a server with http node js module
 * @param {Object} req object with request information
 * @param {Object} res object with response information
 */
const server = http.createServer((req, res) => {
	// req contains tons of data about the request made to the server
	// For example: req.url contains the url requested
	if (req.url === '/') {
		res.writeHead(200, {'content-type': 'text/html'});
		const homePage = fs.readFileSync('./static/templates/index.html');
		res.write(homePage);
		res.end();
	} else {
		res.writeHead(404, {'content-type': 'text/html'});
		const notFound = fs.readFileSync('./static/templates/notDefined.html');
		res.write(notFound);
		res.end();
	}
});

// I used port 80 because I worked inside a docker container with -p 8080:80
server.listen(80);

// The tedious is have to handle with each request made it to the IP of the server
// For example: If we have in the html files a src being requested and pointing
// to the server (e.g <img src="./someFile">), We need to handle this request
