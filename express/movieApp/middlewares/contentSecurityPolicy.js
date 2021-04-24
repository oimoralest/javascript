export const imagesPolicy = function (req, res, next) {
	res.set('Content-Security-Policy', "img-src 'self' https://image.tmdb.org");
	next();
};
