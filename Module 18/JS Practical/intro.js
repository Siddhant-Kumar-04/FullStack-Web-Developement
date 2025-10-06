/* Global scope is accessible in all environments */
console.log(name); // undefined
// let name = "Siddhant";  //Global Variable
var name = "Siddhant"; //Global Variable
function fun() {
    console.log(name);
}
fun(); // Siddhant
console.log(name); // Siddhant

/* Function scope is accessible only within the function */