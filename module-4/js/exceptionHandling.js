/*
Javascript allows you to specify error handling blocks that can run code in errant scenarios.
The try statement allows you to execute code within a 'sandbox' that tests the code for errors.
If an error occurs, the code within the catch statement is executed and gives you the opportunity to safely handle the error.
*/
try {
  callExternalFunction();
}
catch(error) {
  console.log(error.message);
}
/*
The finally statement is useful if you would like to ensure that a block of code is executed, if possible, after your exception is safely handled.
If you are opening connections to external services, this can be a good place to ensure that the connection is closed.
The finally statement is run regardless of the result.
*/
var connection = getExternalConnection();
try {
  connection.open();
  connection.callExternalFunction();
}
catch(error) {
  console.log(error.message);
}
finally {
  connection.close();
}
// You can also create your own custom error messages using the throw statement.
try {
  callExternalFunction();
  if (result.isNotValid) {
    throw "Custom error message";
  }
}
catch(error) {
  console.log(error.message);
}
