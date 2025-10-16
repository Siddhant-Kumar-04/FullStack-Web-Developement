// Key() Method

const student =
{
    "name": "Siddhant",
    age: 22,
    grade: "A"
};

const keys = Object.keys(student);
console.log(keys);

// Values() Method

const values = Object.values(student);
console.log(values);

const entries = Object.entries(student);
console.log(entries);

// create() Method
const dogProperties = {
    name: {
        value: "Pluto",
        writable : true,
        enumerable : true,
    },
    age: {
        value: 2,
        writable : true,
        enumerable : true,
    }
}

const myDog = Object.create(dogProperties);
console.log(myDog.name);
console.log(myDog.age);

// assign() Method
const person = {
    name: "Siddhant",
};
const Details = {
    age: 22,
    country: "India"
}

const personDetails = Object.assign({}, person, Details);
console.log(personDetails);

const person2 = {
    name: "Priya",
    
};
const details = {
    age: 25,
    country: "America"
}
const detailsImp = Object.assign(person2, details);
console.log(detailsImp);

// fromEntries() Method turning key value pair into object
const KeyValuePair = [["name", "Siddhant"], ["age", 22], ["country", "India"]];
const objFromEntries=Object.fromEntries(KeyValuePair);
console.log(objFromEntries);

// defineProperty()
console.log("***************************************");
const person3 = {};
Object.defineProperties(person3, {
    name: {
        value: "Siddhant",
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 22,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
console.log(person3?.name);
console.log(person3?.age);

console.log("***************************************");
//getOwnPropertyDescriptor()
const student2 = {
    name: "Alice",
    age: 40,
};

const namedescriptor = Object.getOwnPropertyDescriptor(student2, 'name');
const agedescriptor = Object.getOwnPropertyDescriptor(student2, 'age');
console.log("--Age Descriptor-----");
console.log(agedescriptor.value);
console.log(agedescriptor.writable);
console.log(agedescriptor.enumerable);
console.log(agedescriptor.configurable);
console.log(agedescriptor);
console.log("--Name Descriptor-----");
console.log(namedescriptor.value);
console.log(namedescriptor.writable);
console.log(namedescriptor.enumerable);
console.log(namedescriptor.configurable);
console.log(namedescriptor);
console.log("***************************************");
// getOwnPropertyNames()
const secretKey = Symbol('secret');
const users = {
    username: "john_doe",
    password: "12345",
    [secretKey]: "Siddhant@1234"
};

const propertyName = Object.getOwnPropertyNames(users);
console.log(propertyName);

console.log("***************************************");
// getPrototypeOf() Method

const person4 = {
    name:"Alice",
    age: 30
};
const student5 = Object.create(person4);
console.log( Object.getPrototypeOf(student5)); // true

// setProtoTypeOf() Method
console.log("***************************************");
const animal = {
    name: "Dog",
};
const heroAnimal = {
    fly: function () {
        return "Pluto is Flying";
    }
}

Object.setPrototypeOf(animal, heroAnimal);
console.log(animal.fly());

// preventExtensions() Method
console.log("***************************************");
const person5 = {
    name: "Siddhant",
    age: 22
};

Object.preventExtensions(person5);
person5.country = "India";
console.log(person5); // country will not be added

// isExtensible() Method

console.log("***************************************");
console.log(Object.isExtensible(person5));
// false

const person6 = {
    name: "Siddhant",
    age: 22
};

console.log(Object.isExtensible(person6));
// true

// seal() Method

console.log("***************************************");

const person7 = {
    name: "Siddhant",
    age: 22,
    Address: "NPS India"
};

console.log(Object.seal(person7));
person7.country = "India";
console.log(person7);

// isSealed() Method

console.log(Object.isSealed(person7));
console.log(Object.isSealed(person6));
console.log("***************************************");
//  freeze() Method

const person8 = {
    name: "Siddhant",
    age: 22,
    Address: "NPS India"
};
Object.freeze(person8);
person8.age = 23;
console.log(person8);
console.log("***************************************");
// isFrozen()

console.log(Object.isFrozen(person8));  
console.log(Object.isFrozen(person6));