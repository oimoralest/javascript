export const scriptSource = function (req, res, next) {
    res.set(
        'Content-Security-Policy',
        "script-src 'self' https://cdn.jsdelivr.net/"
    );
    next();
};
