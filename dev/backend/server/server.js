const https = require('https');
const fs = require('fs');

/**
 * Creates https server
 * @param {Express.Application} app 
 * @returns 
 */
module.exports.create = function create(app) {
    return https.createServer({
        key: fs.readFileSync('./localhost.key'),
        cert: fs.readFileSync('./localhost.crt')
    }, app);
};

/**
 * Starts https server
 * @param {https.Server} server 
 * @returns 
 */
module.exports.start = function start (server) {
    return server.listen(4431, function () {
        console.log('Example app listening on port 4431! Go to https://localhost:4431/')
    });
};

