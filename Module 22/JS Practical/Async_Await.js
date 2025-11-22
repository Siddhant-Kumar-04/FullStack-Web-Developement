const fun = () => {
    return new Promise((resolve) => {
       
        setTimeout(() => {
            console.log("Inside Fun");
            resolve("Resolved Done");
        }, 5000);
    })
}

async function asyncFun() {
    console.log("Before calling fun");
    const result1 = await fun();
    const result2 = await fun();
    const result3 = await fun();
    const result4 = await fun();
    console.log("After calling fun");
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);
}
asyncFun()

console.log("Ending Async_Await.js file");
