
function curry(fn) {
  return function(a) {
    return function(b) {
      return fn(a, b);
    };
  };
}


function add(x, y) {
  return x + y;
}


let curriedAdd = curry(add);


console.log(curriedAdd(2)(3)); 
console.log(curriedAdd(10)(15));
