function taxCalculator() {
    
    const taxBrackets = [
        { limit: 250000, rate: 0 },     
        { limit: 500000, rate: 0.05 },  
        { limit: 1000000, rate: 0.20 }, 
        { limit: Infinity, rate: 0.30 } 
    ];

    return function calculateTax(income) {
        let tax = 0;
        let previousLimit = 0;

        for (let i = 0; i < taxBrackets.length; i++) {
            const { limit, rate } = taxBrackets[i];

            if (income > limit) {
                // Tax for this bracket
                tax += (limit - previousLimit) * rate;
                previousLimit = limit;
            } else {
                // Partial slab
                tax += (income - previousLimit) * rate;
                break;
            }
        }

        return tax;
    };
}


const calculateTax = taxCalculator();


console.log("Income: 200000, Tax:", calculateTax(200000));  
console.log("Income: 400000, Tax:", calculateTax(400000)); 
console.log("Income: 750000, Tax:", calculateTax(750000)); 
console.log("Income: 1500000, Tax:", calculateTax(1500000));
