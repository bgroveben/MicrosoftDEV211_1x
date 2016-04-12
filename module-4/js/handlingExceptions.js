function correctMethodName() {
  return "Output Message";
}

/* var result = correctMethodName();
Now let's mess things up:
*/
/*
var result = wrongMethodName();
document.writeln(result);
Let's include some error handling code:
*/
try {
  var result = wrongMethodName();
  document.writeln(result);
}
catch(error) {
  /*
  document.writeln('An error occurred');
  That's good, but let's be more specific:
  */
  document.writeln('<h3>Error:</h3><p>'+error+'</p>');
}
