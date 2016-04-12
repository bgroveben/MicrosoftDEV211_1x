// There are two JavaScript objects used to manage data stored locally on the browser client:
/*
localStorage Object
The localStorage object stores data that does not expire.
This data is available even after the user has closed the browser or shut down the computer.
*/
localStorage.setItem("lastname", "Grove");
localStorage.getItem("lastname");
/*
sessionStorage Object
The sessionStorage object stores data for a single session.
If you close a browser window or tab, the data is lost.
*/
sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
var getClickCount = 'Click count: ' + sessionStorage.clickcount;
