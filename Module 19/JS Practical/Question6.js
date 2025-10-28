// Base class Shape
class Shape {
    constructor(name) {
        this.name = name;
    }

    area() {
        return 0;
    }

    perimeter() {
        return 0;
    }

    display() {
        console.log(`Shape: ${this.name}`);
        console.log(`Area: ${this.area().toFixed(2)}`);
        console.log(`Perimeter: ${this.perimeter().toFixed(2)}`);
        console.log('--------------------------------');
    }
}


class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Subclass: Rectangle
class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

// Subclass: RightTriangle
class RightTriangle extends Shape {
    constructor(base, height) {
        super("Right Triangle");
        this.base = base;
        this.height = height;
    }

    area() {
        return 0.5 * this.base * this.height;
    }

    perimeter() {
        const hypotenuse = Math.sqrt(this.base ** 2 + this.height ** 2);
        return this.base + this.height + hypotenuse;
    }
}


const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new RightTriangle(3, 4);


circle.display();
rectangle.display();
triangle.display();
