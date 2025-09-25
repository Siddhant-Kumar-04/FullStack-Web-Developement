console.log('Hello, World!');

// Variable Creation in JavaScript
// let -> Key Work  movieNName-> Variable Name  = "Deadpool vs wolvorine" -> Value

let movieName = "Deadpool vs wolvorine";
var movieDiscription = "The new Wolvorien saga";
const moviePrice = 300;

let cast;
console.log("Sanket Singh", 600)
console.log(cast)

// Strings
	let movieNa=" Deadpool & Wolverine"; // This is a 	string
	let movieDesc='The branch new Movie on Wolvorine';
	console.log(movieName);
    console.log(movieDesc);
    
//Number
let moviePr=300;
	let movieDiscount=8.5;
	let numberofMoviereview=0;
	console.log(moviePr,movieDiscount,numberofMoviereview);

// Boolean
let isProductsAvailable=true;
let isMovierealeased=false;
console.log(isProductsAvailable, isMovierealeased);
// objects
const obj = { "Instagram": 500, "twitter": 8000, "fb": 600 };
console.log(obj);
// Arithemtic Operators

console.log(10 + 2)
console.log(10 - 2)
console.log(10 * 2)
console.log(10 / 2)     //quotient
console.log(10 % 2)		//Remainder
console.log(10 ** 2)    //Exponentiation

// Assignment Operators
let x = 10;  //operator assigns value from rhs ti lhs.
x += 9;  // x = x + 9
console.log(x)
x -= 9;  // x = x - 9
console.log(x);
x *= 10; // x = x * 10
console.log(x);
x /= 10; // x = x / 10
console.log(x);
x %= 2; // x = x % 2
console.log(x);
x **= 2; // x = x ** 2
console.log(x);

// Comparison Operators
let m = 5;
let n = 6;

console.log(m >= n);
console.log(m > n);
console.log(m < n);
console.log(m <= n);
//==//=== 
console.log(m == n); //value
console.log(m === n); 

//logical operators
console.log(true && false);
console.log(true || false);
console.log(10 && 9);
console.log(0 && 5);


/*
0 || 1 1
1 || 1 1
1 || 0 1
1 || 0 0

*/

//Bitwise Operators
/*
Bitwise and -> &
bitwise or -> |
bitwise not -> ~
bitwise xor -> ^
*/

//5 & 7 -> now perform & operation bit by bit

/*
  1 0 1
& 1 1 1
----------
   1
*/

console.log(5 & 7); //5

//bitwise or
/*
  1 0 1
& 1 1 1
----------
  1 1 1
*/
console.log(5 | 7); //7


/* 
statement that can help us to exceute a piece of logic in a particular condition
*/
let marks = 90;
if (marks > 80)
	console.log("You are eligible for interview");
else
	console.log("You are not eligible for interview");



//Even aur odd Using Bitwise Operators

// using & 1

let number = 5;
if (number & 1)
	console.log("Odd");
else
	console.log("Even");
