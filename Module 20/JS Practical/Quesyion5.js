const person1 = {name:"Siddhant",Age:22};
const person2 = { name: "Priya", Age: 16 };

function IntroduceYourself() {
    console.log(`Hello, I am ${this.name} , and I am ${this.Age} Year Old`);    
}

IntroduceYourself.call(person2); 