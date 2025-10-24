class ComplexNumber {
    #real;
    #imaginary;
    constructor(real, imaginary) {
        this.#real = real;
        this.#imaginary = imaginary;
    }
    addComplexNumber(c) {
        this.#real += c.#real;
        this.#imaginary += c.#imaginary;
    }

    get real() {
        return this.#real;
    }
    get imaginary() {
        return this.#imaginary;
    }
    display() {
        console.log(`${this.#real} + ${this.#imaginary}i`);
    }

    static add(c1, c2) {
        return new ComplexNumber(c1.#real + c2.#real, c1.#imaginary + c2.#imaginary);
    }

}

const c1 = new ComplexNumber(2, 3);
const c2 = new ComplexNumber(4, 5);
c1.addComplexNumber(c2);
c1.display();
ComplexNumber.add(c1,c2).display();