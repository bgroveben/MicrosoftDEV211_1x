var Salutation = (function () {
    function Salutation(message) {
        this._salutation = message;
    }
    Salutation.prototype.Salutation = function () {
        return "Hello, " + this._salutation;
    };
    return Salutation;
}());
var greeting = new Salutation("My Human Master");
$('header').append($('<h1>', {
    html: greeting.Salutation()
}));
