/*
forEach() method executes a provided function once to each
array element

*Syntax:
  arr.forEach(function(currentValue, index, array){
  // code block to call on each array element
})

currentValue: the current value being processed in the array
index (optional): the index of the current value being processed
array (optional): the input array that map was called upon

* Since we are not going to hijack the native .forEach()
method we will be passing the input array as the
first argument
*/

const forEach = (arr, callback) => {
  // iterate through the array passed in
  for (let i = 0; i < arr.length; i++) {
    // as we iterate we want to call the callback
    // function on current item, index, and array passed in
    callback(arr[i], i, arr)
  }
  // forEach does not return any value
}

// export for testing purposes
module.exports = forEach
