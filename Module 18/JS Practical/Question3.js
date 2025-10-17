const person = {
    name:"John",
    age:30,
    city:"New York"
}

Object.preventExtensions(person);
person.Address = "NSP India";
console.log(person);

const person2 = {
    name:"John",
    age:30,
    city:"New York"
}

console.log(Object.isExtensible(person2));

const teacher = {
    subject:"Maths",
}

Object.seal(teacher);
teacher.subject = "Science";
teacher.grade = "A";
console.log(teacher);

const sealedStatus = Object.isSealed(teacher);
console.log(sealedStatus);