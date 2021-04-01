# Express 101

## Description

    Introduction to express js

## Content

| File | Description | Usage |
| --- | --- | --- |
| [expressServer.js](expressServer.js) | Server created with express module | nodemon expressServer.js (Also see: [Usage expressServer](#expressServer.js)) |
| [expressRouting.js](expressRouting.js) | Knowing how to create routes with express | nodemon expressRouting.js (See more: [Usage expressRouting](#expressRouting.js)) |

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

## References

1. [Express](https://expressjs.com): Fast, unopinionated, minimalist web framework for Node.js
2. [What is a web framework](https://en.wikipedia.org/wiki/Web_framework): It is important to know what exactly is a web framework
3. [CRUD operations](https://www.codecademy.com/articles/what-is-crud): Operations that an web app could do
