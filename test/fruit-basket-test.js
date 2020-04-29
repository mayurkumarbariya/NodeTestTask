const chai = require('chai');
const assert = chai.assert;

const FruitBasket = require('../class/FruitBasket');
describe('FruitBasket test scenarios', () => {
    const basketData = {
        "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
        "max_weight": 8,
        "contents": [{
            "type": "apple",
            "color": "green",
            "weight": 3
        }, {
            "type": "apple",
            "color": "red",
            "weight": 1
        }, {
            "type": "pear",
            "color": "green",
            "weight": 2.5
        }, {
            "type": "orange",
            "color": "green",
            "weight": 3
        }]
    };
    const expectedData = {
        "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
        "total_fruits": 4,
        "total_weight": 9.5,
        "fruit_counts": [{
            "type": "apple",
            "count": 2
        }, {
            "type": "pear",
            "count": 1
        }, {
            "type": "orange",
            "count": 1
        }]
    };
    describe('getFruitBasketDetails: retrieves fruit basket details', () => {
        it('Success scenario', (done) => {
            const fruitBasket = new FruitBasket(basketData.id, basketData.max_weight, basketData.contents);
            const details = fruitBasket.getFruitBasketDetails();
            assert.deepEqual(details, expectedData, 'Expected data was not returned');
            done();
        });
    });
});
