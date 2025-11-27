const person = {
    name: "Alice",
    greet: function () {
        setTimeout(() => {
            console.log("Hello, My name is " + this.name);
            
        })
    }

   
}
    ;
    person.greet();