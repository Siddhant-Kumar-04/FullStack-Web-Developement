/**
 * 
 * fun -> HOF? -> it takes  fn (which is a function ) as argument
 * @param {*} fn 
 */
function fun(x, fn) {
    for (let i = 0; i < x; i++){
        console.log(i);
    }
    fn();
}

fun(20, function exec() {
    console.log("I am ececuted also");
})

// The function which is are passing to a higher order function during the function call is said to be call back function