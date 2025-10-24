const Product = function(n, p) {
    this.name = n;
    this.price = p;
}

const p = new Product("I Phone", 2000);
console.log(p); // TypeError: Product is not a constructor
/*
Arrow function will not work in context with constructor functions
*/