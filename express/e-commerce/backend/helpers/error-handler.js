function errorHandler(err, req, res, next) {
    // jwt type error
	if (err.name === 'UnauthorizedError') {
		return res.status(401).json({message: 'The user is not authorized'});
	}
    // Validation type error
	if (err.name === 'ValidationError') {
		return res.status(401).json({message: err});
	}
    // General errors
	return res.status(500).json({message: err.name});
}

module.exports = errorHandler;
