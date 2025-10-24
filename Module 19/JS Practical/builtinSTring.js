// let x = new String('Hello World');
// console.log(typeof x); // object
// console.log(x);

let obj = {
    x: 10, y: 20,
    display() {
        console.log(this.x + this.y);
    }
}

obj.display();

console.log(this);