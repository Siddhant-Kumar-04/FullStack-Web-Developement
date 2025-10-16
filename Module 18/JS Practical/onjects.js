// const person = {
//     fname: "John",
//     lname: "Doe",
//     age: 25,
//     greet: function() {
//         console.log("Hello ");
//     }
// }


// console.log(person.greet())


// ob1 = new Object();

// const person1 = new Object();
// person1.fname = "Jane";
// person1.lname = "Doe";
// person1.age = 30;
// person1.greet = function() {
//     console.log("Hello " + this.fname + " " + this.lname);
// }

// Using Object Constructor

function per(fname, lname, age)
{
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.greet = function() {
        console.log("Hello " + this.fname + " " + this.lname);
    }
}

const person2 = new per("Alice", "Smith", 28);

console.log(person2.fname);
console.log(person2.greet());
console.log(person2["fname"]);

const per4 = {
    fname: "Bob",
    lname: "Brown",
    age: 35,
}
const siddhant = "lname";
console.log(per4[siddhant]);

per4.city = "India";
console.log(per4);
console.log(per4.city);
//  Adding Function to objects

per4.hii = function () {
    console.log("Hii PC Baby");
}

per4.hii();

delete per4.city;
console.log(per4);
console.log("*****************************************");

for (const key in per4) {
    console.log(key + ": " + per4[key]);
}

console.log("city" in per4);

console.log("fname" in per4);

// Computed Property Names

const PropertyName = "Age";

const per5 = {
    fname: "Charlie",
    lname: "Davis",
    [PropertyName]: 40
}

console.log(per5.Age);


// Optional Chaining

const user = {
    id: 1,
    name: "John Doe",
    address: {
        street: "123 Main St",
        city: "Anytown",

    }, preferences: {
        notificationStatus: function () {
            console.log("Notifications Received");
        }
    }
};

const userCity = user.address?.city;
const userState = user.address?.state;

console.log(userCity);
console.log(userState);

// Optinal Chaining with Methods

const notification = user.preferences?.notificationStatus?.();
const onlineStatus = user.preferences?.onlineStatus?.();

console.log(notification);
console.log(onlineStatus);

// Dynamic Property Access

const Proper = "street";

const streetName= user.address?.[Proper];
console.log(streetName);

const stateName = "city";

const cityName = user?.address?.[stateName];
console.log(cityName);
