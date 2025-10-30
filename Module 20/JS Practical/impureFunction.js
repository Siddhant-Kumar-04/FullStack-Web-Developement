let totalVal = 100;
const increaseVal = (increament) => {
       return (totalVal += increament);
           
}

const value1 = increaseVal(20);
const value2 = increaseVal(20);
console.log(value1, value2);