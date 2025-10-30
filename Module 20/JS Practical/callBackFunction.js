const result = (result) => {
    console.log("The final Result is: "+result);
}

const add = (a, b, callback) => {
    const sum = a + b;
    callback(sum);
}
const sub=(a,b,callback)=>{
    const difference=a-b;
    callback(difference);
}

add(10, 5, result); // The final Result is 15
sub(10,5,result); // The final Result is 5