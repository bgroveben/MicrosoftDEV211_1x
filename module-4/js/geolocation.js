/*
HTML5 includes a Geolocation API that allows you to query the position of a user either at a point in time or over a period of time (tracking).
A user location is considered private information so the user will be prompted to approve of your request when you first use the API.
*/
/*
Get Current Position
First, use the getCurrentPosition() function to get the user's current position.
The data returned is the latitude and lingitude of the user.
The function takes a callback parameter and will invoke this function once it has determined the location.
*/
function getPositionResult(position) {
  console.log(position.coords.latitude + ' ' + position.coords.longitude);
}
navigator.geolocation.getCurrentPosition(getPositionResult);
/*
Watch Position
The watchPosition() function invokes the callback function as the user moves so that you can track their position over time.
To stop watching the user's position, invoke the clearWatch() function.
*/
function refreshPosition(position) {
  var list = document.getElementById('positionList');
  list.innerHtml += ('<li>' + position.coords.latitude + ' ' position.coords.longitude + '</li>');
}
navigator.geolocation.watchPosition(refreshPosition);
