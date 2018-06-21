const fs = require('fs')

let getFile = function(fileName, callback) {
    fs.readFile(fileName, 'utf8', function read(err, data) {
        if (err)
            throw err
        else
            callback(JSON.parse(data))
    })
}

//finds pairs of items that fit under a given price
//@param array of objects, items available for purchase
//@param int or string totalPrice, price in cents you want to spend
//@param int numItems (optional), do you want more than two items?
//returns an array of two objects if found, false otherwise
let findPair = function(prices, totalPrice, numItems) {
    if(!totalPrice) {
        throw 'Please pass the total price you are willing to spend, in cents.'
    }
    totalPrice = parseInt(totalPrice)

    //first, get rid of all items that are >= the total price; we won't need these
    let items = prices.filter(item => item.price < totalPrice)

    //get the most expensive item we can afford, pair it with a cheap one for the remainder
    for(let i = items.length -1; i >= 0; i--){
        let item = items[i],
            remainder = totalPrice - item.price,
            remainderItems = [],
            remainderItem = {}

        //find all items that fit under the remainder
        remainderItems = items.filter(remainderItem => remainderItem.price <= remainder),
        //choose item that minimizes remaining cash
        //since it's already sorted, we can just choose the last item
        remainderItem = remainderItems[remainderItems.length-1]

        //items must be unique
        if(remainderItem && item !== remainderItem) {
            return [remainderItem, item]
        }
    }
}

//init
let init = function() {
    getFile(process.argv[2], function(prices){
        const totalPrice = process.argv[3],
                numItems = parseInt(process.argv[4]) || 2

        let pair = findPair(prices, totalPrice, numItems)
        if(!pair) {
            console.log("Not possible")
            return
        }
        console.log(pair)
    })
}

module.exports = findPair

//for running on CLI
if(process.argv[2]) {
    init()
}
