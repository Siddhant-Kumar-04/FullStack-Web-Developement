function factorialCalculate(n)
{
    if (n < 0) {
        return -1;
    }
    if (n <= 1)
        return 1;
    return n * factorialCalculate(n - 1);
}

console.log(factorialCalculate(2));