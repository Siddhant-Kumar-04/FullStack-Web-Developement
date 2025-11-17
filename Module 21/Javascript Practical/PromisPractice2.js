const Promis1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
const Promis2 = fetch("https://jsonplaceholder.typicode.com/posts/2");
const Promis3 = fetch("https://jsonplaceholder.typicode.com/posts/3");

const allPromises = [Promis1, Promis2, Promis3];
Promise.all(allPromises)
    .then((res) => {
        console.log("All promises resolved:", res);
    }).catch((err) => {
        console.log("One of the promises rejected:", err);
})