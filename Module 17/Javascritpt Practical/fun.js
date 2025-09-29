function isEven(x)
{
    if (x % 2 == 0)
    {
        return true;
    }
    return false;
}

for (let i = 1; i < 10; i++) {
    if (isEven(i) == true) {
        console.log(i + " is even");
    }
    
}