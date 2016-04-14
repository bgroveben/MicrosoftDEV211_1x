$(document).ready(function() {
  makeRequests();
});

/* Uncomment and run this one first:

function makeRequests() {
  $.ajax({
    // url: 'http://www.example.com/api',  #! this url throws an error
    url: 'http://httpbin.org/get',
    method: 'GET',
    dataType: 'json'
  })
  .done(function(response) {
    $('body > p').text(
      JSON.stringify(response)
    );
  })
  .fail(function() {
    alert('An error has occurred')
  });
}
*/

/* Uncomment and run this one second:

function makeRequests() {
  $.get({
    url: 'http://httpbin.org/user-agent',
    dataType: 'json'
  })
  .done(function(response) {
    alert(JSON.stringify(response));
    $('body > p').text(
      response['user-agent']
    );
  });
}
*/

/* Run this one third/last */
function makeRequests() {
  $.getJSON('http://httpbin.org/ip')
    .done(function(response) {
      alert(JSON.stringify(response));
      $('body > p').text(
        response.origin
      );
    });
}
