const AWS = require('aws-sdk');
const url = require('url');

const _handleAvatarsRequest = async (req, res) => {
    const request = url.parse(req.url);
    const path = request.path.split('/')[2];
    console.log(request, path)
    try {
        const { method } = req;
        if (method === 'POST') {
            res.statusCode = 200;
            res.end()
        } else if (method === 'GET' && path) {
            res.statusCode = 200;
            res.end()
        } else if (method === 'DELETE' && path) {
            res.statusCode = 200;
            res.end()
        } else {
            res.statusCode = 404;
            res.end();
        }
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = {
    _handleAvatarsRequest
}