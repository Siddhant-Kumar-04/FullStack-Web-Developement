class calculator{
    constructor(num1,num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    add() {
        return this.num1 + this.num2;
    }
    subtract() {
        return this.num1 - this.num2;
    }
    multiply() {
        return this.num1 * this.num2;
    }   
    divide() {
        if(this.num2 === 0) {
            return 'Error: Division by zero';
        }
        return this.num1 / this.num2;
    }

}

const calc1 = new calculator(10, 20);
console.log("Addition: " + calc1.add());
console.log("Subtraction: " + calc1.subtract());
console.log("Multiplication: " + calc1.multiply());
console.log("Division: " + calc1.divide());