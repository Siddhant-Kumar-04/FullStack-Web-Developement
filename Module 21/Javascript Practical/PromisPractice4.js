const PromisParc = [
    new Promise((resolve,reject) => setTimeout(() => reject("Promise 1 rejected"), 1000)),
    new Promise((resolve,reject) => setTimeout(() => reject("Promise 2 Rejected"), 2000)),
    new Promise((resolve,reject) => setTimeout(() => reject("Promise 3 Rejected"), 3000)),
];


Promise.any(PromisParc).then((value) => {
    console.log("First fulfilled promise:", value);
}).catch((AggregateError) => {
    console.log(AggregateError.errors);
})