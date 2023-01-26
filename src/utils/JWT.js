const JWT = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const generateToken = (payload, expiresIn = '1d') => {
    const JWTConfig = {
        expiresIn,
        algorithm: 'HS256',
    };
    
const token = JWT.sign({ payload }, JWT_SECRET, JWTConfig);

return token;
};

module.exports = {
    generateToken,
};
