# Express 101

## Description

    Introduction to express js

## Content

| File | Description | Usage |
| --- | --- | --- |
| [expressServer.js](expressServer.js) | Server created with express module | nodemon expressServer.js (See more: [Usage expressServer](#expressServer.js)) |
| [expressRouting.js](expressRouting.js) | Knowing how to create routes with express | nodemon expressRouting.js (See more: [Usage expressRouting](#expressRouting.js)) |
| [staticFiles.js](staticFiles.js) | Knowing how to server static files with express | nodemon staticFiles.js (See more: [Usage staticFiles](#staticFiles.js)) |

## Usage

Note: In this scripts I use the port 80 because I work with docker containers publishing the 8080 port of my host with the 80 port of the docker container. However, you can change this port in the scripts

### expressServer.js

To run just type in your terminal

    nodemon expressServer.js
You can do any request type with Postman, curl or similar software

    curl -X GET localhost:80/

### expressRouting.js

To run just type in your terminal

    nodemon expressRouting.js
For requests you can use Postman, curl or similar software

#### GET request

To make a GET request with curl, just type in your terminal

    curl -X GET localhost:80/

#### POST request

To make a POST request with curl, just type in your terminal

    curl -X POST localhost:80/

#### PUT request

To make a PUT request with curl, just type in your terminal

    curl -X PUT localhost:80/

#### DELETE request

To make a DELETE request with curl, just type in your terminal

    curl -X DELETE localhost:80/

### staticFiles.js

To run just type in your terminal

    nodemon staticFiles.js
Next, you can open in your browser the following URL:\
http://localhost:80/images/huawei.jpeg

## References

1. [Express](https://expressjs.com): Fast, unopinionated, minimalist web framework for Node.js
2. [What is a web framework](https://en.wikipedia.org/wiki/Web_framework): It is important to know what exactly is a web framework
3. [CRUD operations](https://www.codecademy.com/articles/what-is-crud): Operations that a web app could do
4. [all method](http://expressjs.com/es/api.html#app.all): Express method
5. [listen method](http://expressjs.com/es/api.html#app.listen): Express method
6. [get method](http://expressjs.com/es/api.html#app.get): Express method
7. [post method](http://expressjs.com/es/api.html#app.post.method): Express method
8. [put method](http://expressjs.com/es/api.html#app.put.method): Express method
9. [delete method](http://expressjs.com/es/api.html#app.delete.method): Express method
10. [use method](http://expressjs.com/es/api.html#app.use): Express method
11. [static middleware function](http://expressjs.com/es/api.html#express.static): Built-in middleware function
