const mongoosse = require('mongoose');
require('dotenv').config();

mongoosse.connect(
    process.env.MONGODE_URI || '',
    {
        useNewParser: true,
        useUnifiedTopology: true
    }
);

module.exports = mongoosse.connection;