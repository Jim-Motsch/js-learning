class Calculator {
    methods: Record<string, (a: number, b: number) => number>;

    constructor() {
        this.methods = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b
        };
    }

    calculate(str: string): number {
        let arr = str.split(' ');
        let operator: string = arr[1];
        let num1: number = +arr[0];
        let num2: number = +arr[2];
        return this.methods[operator](num1, num2);
    }

    addMethod(name: string, func: (a: number, b: number) => number): void {
        this.methods[name] = func;
    }
}

let calc = new Calculator();
calc.addMethod("*", (a, b) => a * b);
console.log(calc.calculate("3 + 7"));
console.log(calc.calculate("3 * 7"));