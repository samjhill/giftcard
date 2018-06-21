Find pair
--------
This application finds two items that you can buy, given an amount of money.

Getting started
========

Pass a json file (prices.js) containing an array of objects, like so:
```JSON
[
    {
        "name": "book",
        "price": 5000
    },
    {
        "name": "candle",
        "price": 1000
    },
]
```

Also, pass the amount of money that you want to spend.

Example
=========

`node findPair.js prices.js 2500`

Testing
========

`npm run test`

Advanced
========

If you want to find more than two items, you can do that like so:

`node findPair.js prices.js 5000 3` where `3` is the number of items you want

Time Complexity
========
O(n^2) because the number of steps it takes grows as a square of the data set.
