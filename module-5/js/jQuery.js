// DOM querying and manipulation
// You can use jQuery to fimd a hyperlink element on your page with an id attribute set to example and set its innerHTML text to 'Click Me':
$('a#example').html('click Me');
// You can also find all button elements on your page that reference the blueButton class and set their background color to blue using CSS:
$('button.blueButton').css('background-color', 'blue');

// Event Handling
// jQuery can be used to respond to an event in JavaScript:
$('button.register').click(function() {
  alert('You are registered!');
});

// AJAX
// jQuery can use the $.ajax object and its methods to make queries to external sources (web services, files, APIs, and so on) in a browser-independent fashion:
$.ajax({
  url: "/api/historical/stocks/averagePrice",
  data: {
    tradingAs: 'VNET',
    year: 2014
  },
  success: function(data) {
    $('p#weather').html('$' + data + '&nbsp;USD');
  }
});
