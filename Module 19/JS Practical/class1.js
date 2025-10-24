class Products {
    #name; // private field
    #lastname;
    constructor(n, price) {
        console.log("Products Constructor Called");
        console.log(this);
        this.name = n;
        this.price = price;
    }
    display() {
        console.log("This is a Products " + this.name);
    }

    get name() {
        return this.#name;
    }

    set name(n) {
        this.#name = n;
    }
}

const p1 = new Products("I Phone", 2000);
const p2 = new Products("Samsung S23", 1000);

p1.display();
console.log(p1);
p2.display();
console.log(p2);
// Demonstrating getter and setter
p1.name = "Siddhant Kumar";
console.log(p1.name); 

/*
1. This is in js is diff than other languages
2. this keyword refers to the context from where we call the function
3. If you dont return anything , js retuns the newly created object from the constructor
4. If you return primitive, then also we get newly created object
5. If you return custom object, then js will return this custom obj not the newly created object
*/