import pg from 'pg'
import 'dotenv/config'

const Pool = pg.Pool

// Creates a connection 
export const pool = new Pool({
	user: process.env.PSQL_USER,
	host: process.env.PSQL_HOST,
	database: process.env.PSQL_DB,
	port: process.env.PSQL_PORT,
	password: process.env.PSQL_PWD,
});
