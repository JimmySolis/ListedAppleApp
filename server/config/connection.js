const mongoosse = require('mongoose');
require('dotenv').config();

mongoosse.connect(
    process.env.MONGODE_URI || 'mongodb://127.0.0.1:27017/listed-applApp-DB',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

module.exports = mongoosse.connection;