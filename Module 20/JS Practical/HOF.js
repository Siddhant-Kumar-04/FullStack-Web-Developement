//Higher Order Functions
//The function that take another function as argument these are called Higher Order Function
function f(x, fn) {
    console.log(x);
    fn();
    
}

f(10, function exe() {
    console.log("Function as an argument");
});

let arr = [1, 10, 9, 100, 1000, 11, 12, 13, 14];// unsorted

console.log(arr.sort()); // it sorts the given array
//default implementation of arr.sort() is going to sort my array in lexicalscopeing order


b = [1, 10, 9, 100, 1000, 11, 12, 13, 14];
b.sort(function compare(a, b) {
    //if a<b -> a-b wil be negative -> if comparator function gives neagative then a is placed before b
    return a - b; // ascending order
    // sort is a HOF,, the sort function takes a campatator function as argument
});
console.log(b);