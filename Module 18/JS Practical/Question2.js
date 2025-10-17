const age1 = [19, 22, 19, 24, 20, 25, 26, 25, 24];
console.log("Sorted Array");
 age1.sort();
console.log(age1);
console.log("Min and Max of Age");
console.log("Min Age: " + Math.min(...age1));
console.log("Max Age: " + Math.max(...age1));
console.log("***************************************");
console.log("Median of Age");
let median;
const mid = Math.floor(age1.length / 2);
if (age1.length % 2 === 0) {
    median = (age1[mid - 1] + age1[mid]) / 2;
} else {
    median = age1[mid];
}
console.log("Median age:", median);
console.log("***************************************");
console.log("Average of Age");
let sum = 0;
for (let i = 0; i < age1.length; i++) {
    sum += age1[i];
}
const average = sum / age1.length;
console.log("Average age:", average);

console.log
console.log("Range of All Ages");
const range = Math.max(...age1) - Math.min(...age1);

console.log("***************************************");
const minAge = Math.min(...age1);
const maxAge = Math.max(...age1);
console.log("Range of age:", range);
console.log("Compare the value of (min - average) and (max - average)");
const diffMin = Math.abs(minAge - average);
const diffMax = Math.abs(maxAge - average);

console.log("|Min - Average|:", diffMin);
console.log("|Max - Average|:", diffMax);

