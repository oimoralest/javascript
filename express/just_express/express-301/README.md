# Express 301

## Description

    Learning about req, res, revisited, the router, the express generator and
    HTTP headers

## Content

| File | Description |
| --- | --- |
| [loginSite.js](./loginSite.js) | This file creates an express app to server a Login site |
| [routerApp.js](./routerApp.js) | This file creates an express app to use the two Routers defined in routers folder |

## Usage

**Note**: While running any of both files, you web browser should ask to you for SSL certificate. You can see reference [14](#references) to generate self-signed SSL certificates.

### loginSite.js

To run just type in your terminal:

    nodemon loginSite.js

There are the following endpoints availables:

| Endpoint | Description |
| --- | --- |
| <http://localhost/> | Home page |
| <http://localhost/login> | Login page |

The other routes defined in this file are available while interacting with the login Page

### routerApp.js

To run just type in your terminal:

    nodemon routerApp.js

There are two endpoint availables:
| Endpoint | Description |
| --- | --- |
| <http://localhost/> | Router 1 that returns a HTTP message with json content type |
| <http://localhost/user> | Router 2 that returns other HTTP message with json content type |

## References

1. [cookie method](http://expressjs.com/en/5x/api.html#res.cookie): Sets cookies to req.cookies
2. [cookie-parser](https://www.npmjs.com/package/cookie-parser): Useful to parse req.cookies
3. [clearCooki method](http://expressjs.com/en/5x/api.html#res.clearCookie): Unsets cookies from req.cookies
4. [query property](http://expressjs.com/en/5x/api.html#req.query): Object that contains the query params
5. [res.redirect method](http://expressjs.com/en/5x/api.html#res.redirect): Redirects to the URL specified
6. [res.locals property](http://expressjs.com/en/5x/api.html#res.locals): Useful to store variables tu use in views during the request
7. [res.params property](http://expressjs.com/en/5x/api.html#req.params): Contains the params pased in the URL
8. [app.param method](http://expressjs.com/en/5x/api.html#app.param): Useful to add a callback that handles a specific param
9. [res.sendfile method](http://expressjs.com/en/5x/api.html#res.sendFile): Renders a file in the browser if it can
10. [res.downlad method](http://expressjs.com/en/5x/api.html#res.download): Useful to make a file downloadable
11. [res.set method](http://expressjs.com/en/5x/api.html#res.set): Sets HTTP Headers
12. [res.attachment method](http://expressjs.com/en/5x/api.html#res.attachment): Sets the HTTP Header 'Content-Dispotition' to attachment
13. [res.headersSent property](http://expressjs.com/en/5x/api.html#res.headersSent): Boolean property that indicates if the app sent HTTP headers
14. [SSL autosigned certifies](https://support.microfocus.com/kb/doc.php?id=7013103): Generates .pem files neccessary to create a HTTPS server
15. [express.Router method](http://expressjs.com/en/5x/api.html#express.router): Creates router objects
16. [express-generator](https://expressjs.com/en/starter/generator.html): Useful to create an application skeleton
17. [Solving permission problem installing modules](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)
18. [HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers): Let the client and server pass adittional information
