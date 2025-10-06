const lang=["Javascript","Python","Java","C++"];
console.log(lang);
const len = lang.length;
console.log(len);

let array = ["Hello", 20, true];
console.log(array);
array[1] = 30;
console.log(array);

let numb = new Array(1, 2, 3, 4, 5);
console.log(numb);
// Emtry Array
let emptyArray = Array(100);

emptyArray.fill(10)
console.log(emptyArray);

delete emptyArray[0];   

console.log(emptyArray);

const array1 = [1, 2, 3];
for(const item of array1){
    console.log(item);
}