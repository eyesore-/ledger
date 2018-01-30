/*
The pipe() function consists of a chain of functions which are arranged
so that the output of each function is the input of the next

Pipe will take an n number of functions with each function taking an
argument. The functions are processed in the order they are passed in and the
output is passed into the input for the next function. As a result the pipe
function will return a function that has bundled the sequence of
functions.

Example:
  var pipedFunctions = pipe(
    function(x) {return x + 2},
    function(y) {return y * 2}
  )
  pipedFunctions(2) -> 8
*/

const pipe = function() {
  // implement pipe here
}