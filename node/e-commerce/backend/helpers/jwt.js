const expressJwt = require('express-jwt');

function authJwt() {
	const secret = process.env.SECRET;
	const api = process.env.API_URL;
	return expressJwt({
		secret,
		algorithms: ['HS256'],
		isRevoked: isRevoked,
	}).unless({
		path: [
			{url: RegExp(`${api}/public/uploads/*`), methods: ['GET', 'OPTIONS']},
			{url: RegExp(`${api}/products/*`), methods: ['GET', 'OPTIONS']},
			{url: RegExp(`${api}/categories/*`), methods: ['GET', 'OPTIONS']},
			`${api}/users/login`,
			`${api}/users/register`,
		],
	});
}

async function isRevoked(req, payload, done) {
	if (!payload.isAdmin) {
		done(null, true);
	}
	done();
}

module.exports = authJwt;
