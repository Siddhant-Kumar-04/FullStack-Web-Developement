const Promis = [
    new Promise((resolve, reject) => setTimeout(() => reject("Error"), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve("Promise 2"), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve("Promise 3"), 3000))
]

const anyPromise = Promise.any(Promis);

anyPromise.then((value) => {
    console.log("First fulfilled promise:", value);
})