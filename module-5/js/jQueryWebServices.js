$(document).ready(function() {
  makeRequests();
});

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
