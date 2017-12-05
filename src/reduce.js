/*
The reduce() method applies a callback function to an
accumulator and each element in the calling array going
from left to right reducing to a single value

*Syntax:
  const sum = arr.reduce(function callback(accumulator, currentValue, index, array){
    // Return the new accumulator
  }, initialValue)

Reduce call parameter takes four arguments -
  accumulator: The accumulator accumulates the callbacks return values.
    The accumulated value that is returned in the last invocation of the
    callback or if supplied the initialValue
  currentValue: the current value being processed in the array
  index (optional): the index of the current value being processed
  array (optional): the input array that reduce was called upon
initialValue (optional): The value is used as the first argument to the first
  call of the callback. If initialValue is not defined the initialValue will be
  the first item in the array

  If initialValue is not defined the callback will be executed currentValue
  at index 1. If initialValue is defined then the currentValue will be 
  index 0

EXAMPLES:
  const sum = reduce([1, 2, 3], function(accum, currentValue){
    return accum + currentValue
  })
  const sumInitValue = reduce([1, 2, 3], function(accum, currentValue){
    return accum + currentValue
  }, 10)
  sum // 6
  sumInitValue // 16

* Since we are not going to hijack the native .reduce()
method we will be passing the input array as the
first argument
*/

const reduce = function(arr, callback, initialValue){
  // implement reduce here
}
