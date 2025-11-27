const multiply=((a,b) => {
    return a * b;
})


const obj = {
    value: 10,
    add: function(a, b) {
        return this.value + a;
    }
};

console.log(multiply(5, 4)); // Output: 20
console.log(obj.add(5)); // Output: 15