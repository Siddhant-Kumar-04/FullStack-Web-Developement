function blockingLoop() {
    for (let i = 0; i < 1000000000; i++){
        
    }
}

console.log("Start of file Exec");

setTimeout(function Timer1() {
    console.log("Timer 1 Done");
}, 0);
blockingLoop();
let x = Promise.resolve("Siddhant Promise 1");
x.then(function processPromis(value){
    console.log("Whoese Promise" + value);
    blockingLoop();
})

let y = Promise.resolve("Sidddhant Promis 2");

y.then(function processPromis2(valye) {
    console.log("Whose Promise " + valye);  
    setTimeout(function () {
        console.log("ok Done!!");
    }, 0);
})

let z= Promise.resolve("Siddhant Promise 3");
z.then(function processPromis3(value) {
    console.log("Whose Promise " + value);
});
setTimeout(function Timer2() {
    console.log("Timer 2 Done");
}, 0);
console.log("End of File Exec");