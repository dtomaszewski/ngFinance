const fs = require('fs');
const _ = require('lodash');

const catalog = JSON.parse(fs.readFileSync('stocks.json'));

exports.getStockArray = function () {
    return Object.keys(catalog).map((id) => {
        return _.extend({id}, catalog[id]);
    });
};