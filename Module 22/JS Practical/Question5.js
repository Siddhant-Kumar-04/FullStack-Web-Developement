function mainStringFucntion(strin) {

    
    try {
        const toNumInt = parseInt(strin);
        if(isNaN(toNumInt)) {
            throw new Error("Invalid number format");
        }
        return`The Square is ${toNumInt*toNumInt}`;
    }
    catch (error) {
        console.error(error.message);
    }

}
console.log(mainStringFucntion("5"));
console.log(mainStringFucntion("abc"));
