"use strict";
class Calculator {
    methods;
    constructor() {
        this.methods = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b
        };
    }
    calculate(str) {
        let arr = str.split(' ');
        let operator = arr[1];
        let num1 = +arr[0];
        let num2 = +arr[2];
        return this.methods[operator](num1, num2);
    }
    addMethod(name, func) {
        this.methods[name] = func;
    }
}
let calc = new Calculator();
calc.addMethod("*", (a, b) => a * b);
console.log(calc.calculate("3 + 7"));
console.log(calc.calculate("3 * 7"));
