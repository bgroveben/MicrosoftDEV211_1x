/*
A web worker is a JavaScript file with logic written to run in the background, without affecting the performance of the page or making the page unresponsive.
A web worker is written in a separate JavaScript file that is referenced by your web application.
The file may look like this:
*/
var array = [ 7, 8, 9, 0, 1, 2, 3 ];
function processArray() {
  for (var i = 0; i < array.length, i++) {
    var result = handleData(arrayOfData[i]);
    postMessage(result);
  }
}
function handleData(data) {
  var response = sendToRemoteServer(data);
  return response;
}
/*
To create a new instance of a web worker, you simply need to use the following code in a JavaScript file referenced by your web application:
*/
var worker = new Worker("WorkerFile.js");
// You can use the variable to stop the web worker:
worker.terminate();
// The web worker can send messages back to the web page that is invoking the worker.
// Your page can listen to these messages by handling the onmessage event:
worker.onmessage = function(event) {
  console.log(event.data);
}
