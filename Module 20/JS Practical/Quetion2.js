const contacts = new Map();

contacts.set("Alice", { age: 25, email: "some@gmail.com", location: "Pune" });

function getContactDetails(name) {
    if (contacts.has(name)) {
        const details= contacts.get(name);
        console.log(`Details of ${name}: Age - ${details.age}, Email - ${details.email}, Location - ${details.location}`);
    }
    else {
        console.log(`No contact found for ${name}`);
    }
}

getContactDetails("Alice");
getContactDetails("David");




