const crypto = require('crypto');

module.exports = ({env}) => ({
    auth: {
        secret: env('ADMIN_JWT_SECRET',crypto.randomBytes(16).toString('base64'))
    }
})