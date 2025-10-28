function Person(name, age) {
    this.name = name;
    this.age = age;
    
}

Person.prototype.display = function () {
    console.log(`Name: ${this.name} Age: ${this.age}`);
};

const p1 = new Person("Siddhant", 24);
const p2 = new Person("John", 30);
p1.display();
p2.display();