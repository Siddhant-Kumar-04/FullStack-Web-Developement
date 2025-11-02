let myArray = [1, 2, 3, 4, 5];

(function (...arra) {
     return myArray = [...myArray, ...arra]
})(10, 20, 30, 40, 50);

console.log(myArray);