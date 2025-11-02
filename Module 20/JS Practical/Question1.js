let myMap = new Map();
myMap.set("Name", "Siddhant");
myMap.set("Age", 22);
myMap.set("Course", "MCA");
myMap.set("College", "VIT");

console.log(myMap.has("age"));
console.log(myMap.has("Grade"));

//Retrive with Given Key
console.log("Name of Student"+myMap.get("Name"));
console.log("Name of Collage" + myMap.get("College"));


myMap.forEach((value, key) => {
    console.log(key + " => " + value);

});



