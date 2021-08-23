# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @k2bachan/lotide`

**Require it:**

`const _ = require('@k2bachan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `tail(...)`: description - input an array to retrieve the tail of the array
* `head(...)`: description - input an array to retrieve the head of the array
* `middle(...)`: description - input an array to retrieve the middle value(s) of the array
* `check(...)`: description - input a number to retrieve a check number according to the Luhn Algorithm 
* `countLetters(...)`: description - input a string to retrieve an array of the count for each unique letter within the string 
* `countOnly(...)`: description - input an array (first argument) and an object (second argument) to retrieve an object containing the count of the items in the array that the input object listed
* `findKey(...)`: description - takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(...)`: description - takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `flatten(...)`: description - takes in an array and will flatten the array into a single-level array
* `letterPositions(...)`: description - takes in a string and return all the indices (zero-based positions) in the string where each character is found.
* `map(...)`: description - takes in an array to map and a callback function. Will return a new array based on the results of the callback function
* `obfuscatePassword(...)`: description - takes in a command line argument and returns an encrypted version of that string 
* `takeUntil(...)`: description - takes in an array and a callback function. It will keep collecting items from a provided array until the callback provided returns a truthy value.
* `without(...)`: description - take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.