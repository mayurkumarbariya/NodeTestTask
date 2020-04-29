'use strict';

const _ = require('lodash');
const Fruit = require('./Fruit');

/*
 * Class responsible to handle the FruitBasket
 */
class FruitBasket {
  /*
   * id - fruit basket id
   * maxWeight - fruit basket maximum weight
   * content - fruit basket content (list of fruits)
   */
  constructor (id, maxWeight, content) {
    this.id = id;
    this.max_weight = maxWeight;
    this.contents = content;
  }

  /*
   * Returns the fruit basket details
   */
  getFruitBasketDetails() {
    let totalWeight = 0;
    let fruitCounts = [];
    this.contents.forEach((item) => {
      let fruit = new Fruit(item.type, item.color, item.weight);
      totalWeight += fruit.getFruitWeight();
      let fruitType = fruit.getFruitType();
      let index = _.findIndex(fruitCounts, {type: fruitType});
      if (index === -1) {
        fruitCounts.push({
          type: fruitType,
          count: 1
        });
      } else {
        fruitCounts[index].count++;
      }
    });
    return {
      id: this.id,
      total_fruits: this.contents.length,
      total_weight: totalWeight,
      fruit_counts: fruitCounts
    }
  }
}

module.exports = FruitBasket;
