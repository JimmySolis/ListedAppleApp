const db = require('../config/connection');
const { User, List } = require('../models/index');

const megaUser = require('./user.json');

db.once('open', async () => {
    // clean database
    await User.deleteMany({});
    await User.insertMany(megaUser);
    console.log('all done!');
    process.exit(0);
})