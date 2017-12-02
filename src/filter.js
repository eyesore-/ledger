/*
The filter() method will create a new array with all the elements
that pass the test implemented in the callback function

i.e.
const nums = [1, 2, 3, 4, 5]
const evenNums = nums.filter(function(num){
  return num % 2 === 0
}) // evenNums --> [2, 4]

*Syntax:
  const newArr = arr.filter(callback)

Filter callback parameters are - (currentValue, index, array)

currentValue: the current value being processed in the array
index (optional): the index of the current value being processed
array (optional): the input array that filter was called upon

The callback is ivoked with the three parameters (currentValue, index, array)
on each element and creates a new array based on a return values coerced to
true from the callback function.
*/

const filter = function(arr, callback){

}
