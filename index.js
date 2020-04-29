'use strict';

const FruitBasket = require('./class/FruitBasket');
const {readFile, writeFile} = require('./helpers/fileOperationsHelper');

/*
 * Get fruit basket summary and writes into output json file
 */
function getFruitBasketSummary(callback) {
    let output = [];
    readFile('./dataFiles/input.json', (err, data) => {
        if (err) {
            return callback(err);
        }
        if (!data) {
            return callback(new Error('No record was found'));
        }
        data.forEach((item) => {
            let fruitBasket = new FruitBasket(item.id, item.max_weight, item.contents);
            let basketDetails = fruitBasket.getFruitBasketDetails();
            output.push(basketDetails);
        });

        writeFile('./dataFiles/output.json', JSON.stringify(output), (err, data) => {
            if (err) {
                return callback(err);
            }
            return  callback();
        });
    });
}

getFruitBasketSummary((err) => {
    if (err) {
        console.log('error', err);
        process.exit(1);
    }
    console.log('success');
    process.exit(0);
});
