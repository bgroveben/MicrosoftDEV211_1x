interface IGreeter {
    greet(): void
}
class Greeter implements IGreeter {
    protected _greeting: string;
    constructor(message: string) {
        this._greeting = message;
    }
    public greet() {
        let greetingString: string = this.getGreeting();
        alert(greetingString);
    }
    private getGreeting(): string {
        return "Hello, " + this._greeting;
    }
}
let greeter: IGreeter = new Greeter('World');
greeter.greet();
