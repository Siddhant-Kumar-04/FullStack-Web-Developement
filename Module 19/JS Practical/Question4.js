class Person{
    name;
    age
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    display() {
     console.log(`Name: ${this.name} Age: ${this.age}`);   
    }
}

const person1 = new Person("Siddhant", 22);
person1.display();
const person2 = new Person("Priya", 16);
person2.display();

