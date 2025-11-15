console.log("Start of file Exec - Seq 1");
setTimeout(() => {
    console.log("nside Timer 2 seq 4");
}, 0);

for (let  i = 1; i < 10000000; i++) {
    //something
}

let x = Promise.resolve("Siddhant Kumar This side");
x.then(function (resolve,reject) {
    console.log("Inside Promise then  Seq-3" + resolve);
})

setTimeout(() => {
    console.log("2nd Timer seq 5");

}, 0);

console.log("End of File Exec Seq 2");