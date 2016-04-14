var Greeter = (function () {
    function Greeter(message) {
        this._greeting = message;
    }
    Greeter.prototype.greet = function () {
        var greetingString = this.getGreeting();
        alert(greetingString);
    };
    Greeter.prototype.getGreeting = function () {
        return "Hello, " + this._greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('World');
greeter.greet();
