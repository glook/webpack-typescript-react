/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
const path = require('path');

const config = {
    resolve: {
        alias: {
            src: path.resolve(__dirname, '../src'),
        },
    },
};

module.exports = config;
