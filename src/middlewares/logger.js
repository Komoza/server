const loggingMiddleware = (request, response, next) => {
    console.log(`Request to: ${request.originalUrl}`);
    next();
};

module.exports = loggingMiddleware;