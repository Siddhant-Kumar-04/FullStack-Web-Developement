function timeConsumingLoop() {
    console.log("Starting a time-consuming loop...");
    for (let i = 0; i < 100000000; i++) {
        // Simulating work
    }
    console.log("Loop finished.");
}

function TimerLoop0() {
    console.log("TimerLoop0 started");
    setTimeout((function exect() {
        console.log("TimerLoop0 execution Done");
    }), 5000);
}

function TimerLoop1() {
    console.log("TimerLoop1 started");
    setTimeout((function exec() {
        console.log("TimerLoop1 execution Ends");
    }), 3000);
}

function TimerLoop2() {
    console.log("TimerLoop2 started");
    setTimeout((function exec() {
        console.log("TimerLoop2 execution Ends");
    }), 2000);
   
}

console.log("Script start");
timeConsumingLoop();
TimerLoop0();
TimerLoop1();
TimerLoop2();
timeConsumingLoop();
console.log("Script end");