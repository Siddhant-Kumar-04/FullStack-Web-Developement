function fibon(a = 0, b = 1, n = 10) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = a + b;
        console.log(a);
        a = b;
        b = sum;
    }
    
}
fibon();