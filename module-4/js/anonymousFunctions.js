// Normal function:
function greet() {
  alert('Hello Everyone');
}
greet();

// Anonymous function:
var anonymousFunctionInAVariable = function() {
  alert('I am anonymous');
};
anonymousFunctionInAVariable();

// The most common use for anonymous functions are as arguments to other functions.
function normalFunction(input, callback) {
  var newValue = input + 1;
  callback(newValue);
};
normalFunction(1, function(inputViaCallback) {
  alert(inputViaCallback);
});
