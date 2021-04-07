# Express 201

## Description

    Learning about Middleware and Rendering!

## Content

| File | Description |
| --- | --- |
|[appUse.js](./appUse.js)| Knowing how to use middlewares in express |
| [helmetAndOthers](helmetAndOthers.js) | Knowing how to decode content type to create json content type |
| [rendering.js](./rendering.js) | Knowing how to rendering html content with express |
| [ejsPractice.js](./ejsPractice.js) | Practicing ejs view |

## Usage

Note: In this scripts I use the port 80 because I work with docker containers publishing the 8080 port of my host with the 80 port of the docker container. However, you can change this port in the scripts

### appUse.js

To run just type in your terminal

    nodemon appUse.js

#### GET request

There are two route availables

    curl -X GET localhost:80
    curl -X GET localhost:80/admin

Also you can use your web browser and visit the two routes

### helmetAndOthers.js

To run just type in your terminal

    nodemon helmetAndOther.js
Next, you can open in your browser the following URL:\
<http://localhost:80/ajax.html>\
You can see the logs in your terminal

### rendering.js

To run just type in your terminal

    nodemon rendering.js
Next, you can open in your browser the following URL:\
<http://localhost:80/>\
You can see the logs in your terminal

Note: Maybe you have to edit the [index.ejs](views/index.ejs) file in [views](./views) folder, deleting the h2 and h3 tags

### ejsPractice.js

To run just type in your terminal

    nodemon ejsPracice.js
Next, you can open in your browser the following URL:\
<http://localhost:80/>\
You can see the logs in your terminal

## References

1. [Middleware](http://expressjs.com/en/guide/using-middleware.html#using-middleware): Express is a routing and middleware web framework
2. [locals property](http://expressjs.com/en/5x/api.html#res.locals): Exposes request-level information
3. [json](http://expressjs.com/en/4x/api.html#express.json): Built-in middleware
4. [urlencoded](http://expressjs.com/en/5x/api.html#express.urlencoded): Built-in middleware
5. [static](http://expressjs.com/en/5x/api.html#express.static): Built-in middleware
6. [helmet](http://expressjs.com/en/advanced/best-practice-security.html#use-helmet): Helps to protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately
7. [What is JSON](https://en.wikipedia.org/wiki/JSON): Open standard file format and data interchange format
8. [json method](http://expressjs.com/en/api.html#res.json): Sends a JSON response
9. [set method](http://expressjs.com/en/api.html#app.set): Assigns setting name to value (See [Application Settings Table](http://expressjs.com/en/api.html#app.settings.table))
10. [Template engines](https://expressjs.com/en/resources/template-engines.html): Different template engines that you could use to rendering with express
