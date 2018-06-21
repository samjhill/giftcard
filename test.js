let assert = require('assert')
let findPair = require('./findPair')
//just in case prices.json changes
let prices = [
    {
        "name": "Candy Bar",
        "price": 500
    },
    {
        "name": "Paperback Book",
        "price": 700
    },
    {
        "name": "Detergent",
        "price": 1000
    },
    {
        "name": "Headphones",
        "price": 1400
    },
    {
        "name": "Earmuffs",
        "price": 2000
    },
    {
        "name": "Bluetooth Stereo",
        "price": 6000
    }
]

let getSum = function(total, num) {
    return total + num
}

let testFindPair = function() {
    let budget = 5000,
        pair = findPair(prices, budget, 2),
        totalCost = pair.map(function(item){
            return item.price
        }).reduce(getSum)

    console.log('findPair() should return two items under the given amount')

    try {
        assert.equal(pair.length, 2)
        console.log('Passed.')
    } catch(err) {
        console.error('Failed')
        console.error(err)
    }

    console.log('the total cost should be less than the specified number')

    try {
        assert.equal(totalCost < budget, true)
        console.log('Passed.')
    } catch(err) {
        console.error('Failed')
        console.error(err)
    }
}

let testNoPairExists = function() {
    let budget = 1000,
        pair = findPair(prices, budget, 2)

    console.log('findPair() should be falsey if no pair is found')

    try {
        assert.equal(pair, undefined)
        console.log('Passed.')
    } catch(err) {
        console.error('Failed')
        console.error(err)
    }
}

testFindPair()

testNoPairExists()
