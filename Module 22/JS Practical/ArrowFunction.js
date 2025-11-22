//1. Single parameter and single return satatement
const add = (a) => a + 2;
//2. Multiple paramter and a single return expression
const add2 = (a, b) => a + b;
//3. Multiple statement in function expression
const sum = (x, y) => {
    console.log("Calculating sum...");
    return x + y;

    
}

//4. Returning object literal

const summAddDiff = (a, b) => ({
  sum:a+b,
  diff: a-b  
})

/*
Parantheses around single parameter can be omitted
If there is no parameter, empty parantheses are required
In case of multiple statements, curly braces and return statement are required
In case of returning object literal, wrap the object in parantheses
In arrow function we can pass function as argument to another function
In arrow function, 'this' keyword refers to the surrounding context
*/