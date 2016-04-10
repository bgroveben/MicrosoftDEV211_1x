// In this example, the button does the same thing, but we are referencing a function in JavaScript.
function handleClick() {
  document.getElementById("dateTargetFunction").innerHTML = Date();
}

// In this example, we also move the event assignment to JavaScript.
document.getElementById('dateButton').onclick = handleClickEvent;
function handleClickEvent() {
  document.getElementById('assignEventJavascript').innerHTML = Date();
}

// Alternatively, you can use the addEventListener function for event assignment by either referencing a function using its named identifier or by supplying an anonymous function.

// Named Identifier:
document.getElementById('namedIdentifier').addEventListener('click', namedClickEvent);
function namedClickEvent() {
  document.getElementById('listenForEvents').innerHTML = Date();
}

// Anonymous Function:
document.getElementById('anonymousFunction').addEventListener('click', function handleClick () {
  document.getElementById('listenForEvents').innerHTML = Date();
});
