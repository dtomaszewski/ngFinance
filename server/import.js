const Firebase = require('firebase');
const stocks = require('./stocks');

const fbRef = new Firebase('https://ngfinance.firebaseio.com/stocks');
stocks.getStockArray().forEach((stock) => {
    fbRef.child(stock.id).set({
        count: stock.count,
        name: stock.name,
        symbol: stock.symbol
    });
});