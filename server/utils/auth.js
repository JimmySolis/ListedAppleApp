const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SUPERSECRET;
const expiration = "1h";

module.exports ={
    authMiddlesware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try{
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid Token');
        }

        return req;
    },
    signToken: function ({email, _id}) {
        const payload = { email, _id};
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
}