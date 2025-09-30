function arrAdd(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        arr[i] = arr[i] + 1;
    }

    return arr;
}

// Sum of all parameters;
function arguAdd() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    
    return sum;
}

console.log(arguAdd(1, 2));



