'use strict';

/*
 * Class responsible to handle the Fruit
 */
class Fruit {
    /*
     * type - Store fruit type dataFiles
     * color - Store fruit color detail
     * weight - Store fruit weight dataFiles
     */
    constructor(type, color, weight) {
        this.type = type;
        this.color = color;
        this.weight = weight;
    }

    /*
     * Returns the fruit type
     */    getFruitType () {
        return this.type;
    }

    /*
     * Returns the fruit weight
     */
    getFruitWeight () {
        return this.weight;
    }
}

module.exports = Fruit;

