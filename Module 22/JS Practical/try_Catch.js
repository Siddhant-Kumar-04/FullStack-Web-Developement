function off_even(num) {
    try {
        console.log("You are inside function");
        if(num%2==0){
            console.log("Even Number");
        }
        else {
            console.lo("Odd Number");
        }
        console.log("End of try block");
    }
    catch {
        console.log("Some error occured");
    }
}
off_even(10);