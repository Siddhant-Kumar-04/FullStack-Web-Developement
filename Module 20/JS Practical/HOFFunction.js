function greeting() {
    return function () {
        console.log("Hello Baby");
    }
    
}

const greetFunc = greeting();
greetFunc();

