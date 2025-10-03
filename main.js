const prompt = require("prompt-sync")();

class ValidationError extends Error{
    constructor(message){
       super(message);
       this.name = "ValidationError";
    }
}

let number1 = prompt("Enter first number");
