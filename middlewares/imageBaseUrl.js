const imageBaseUrl = process.env.IMG_BASE_URL

export const imageBaseURL = function (req, res, next) {
    res.locals.imageBaseUrl = imageBaseUrl
    next();
}