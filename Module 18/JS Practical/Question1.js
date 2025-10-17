const ShoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
ShoppingCart.unshift('Meat');
console.log("Meat Added at the Beginning" + ": " + ShoppingCart);// Add 'Meat' to the beginning of the array
console.log("***************************************");
ShoppingCart.push("Sugar");
console.log("Sugar Added at the End" + ": " + ShoppingCart);// Add 'Sugar' to the end of the array 
console.log("***************************************");
delete ShoppingCart[4];
console.log("Remove 'Honey' from the array" + ": " + ShoppingCart);
console.log("***************************************");
ShoppingCart[3] = 'Green Tea';
console.log("Replace 'Tea' with 'Green Tea'" + ": " + ShoppingCart);

