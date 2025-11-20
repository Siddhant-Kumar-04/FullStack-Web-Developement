console.log("Script start");

// Async task
setTimeout(() => {
  console.log("Async task finished (setTimeout)");
}, 0);

// Blocking task – this will freeze the thread
function    blockFor3Seconds() {
    for (let i = 0; i < 100000000000; i++)
    {

    }
}
blockFor3Seconds();

console.log("Script end");
