const operation = (result) => {
    console.log("The computed value is: " + result);
}

const add = (a, b, callback) => {
    const sum = a + b;
    callback(sum);
}

const sub = (a, b, callback) => {
    const difference = a - b;
    callback(difference);
}

add(10, 5, operation);
sub(10, 5, operation);