# Postgresql

## Description

This project is about how to connect postgres with an express app using pg (Just for connection)

## Requirements

All the requeriments are listed on package.json

## Usage

1. Download the entire folde from this URL:

<https://github.com/oimoralest/javascript/tree/main/express/just_express/postgresql>

2. Setup the .env file with the following information:

```text
    PSQL_USER=user
    PSQL_PWD=user_password
    PSQL_HOST=database_host
    PSQL_DB=database_name
    PSQL_PORT=database_port
    APP_PORT=express_app_port
```

3. Install the requeriments running in your terminal:

```bash
    npm install
```

**Note**: Ensure for install nodemon globally:

```bash
    npm install -g nodemon
```

4. Run the app:

```bash
    nodemon src/app.js
```

5. Now you can create query with the pool and bind this query with any link tha you want. Example:

```JavaScript
    app.get('Any_link', (req,res) => {
        pool.query('SQL STATEMENT', (err, dbResponse) => {
            if (err) {
                res.json(err);
            }
            res.json(dbResponse);
        })
    })
```

Then you can go to <http://localhost:APP_PORT/any_link> and see the query result

## References

- [pg](https://www.npmjs.com/package/pg): Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings. [Documentation](https://node-postgres.com/)
