// Let's request some data from a server:
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    // Do something when the document is read;
  }
};
xhttp.open("GET", "filename", true);
xhttp.send();
// What was that all about?
/*
The example above demonstrates the creation and usage of an XMLHttpRequest object.
First, the object is created and then an event handler (anonymous function) is assigned to the onreadystatechange event.
Any time the readyState property changes, the function is executed.
Once the assignment is done, we simply call the open function and then the send function.
*/
/*
Status values for readyState:
0. request not initialized
1. server connection established
2. request received
3. processing request
4. request finished and response is ready
*/
