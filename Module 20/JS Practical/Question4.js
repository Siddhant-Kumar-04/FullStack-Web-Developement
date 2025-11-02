const car = {
    brand: "Ford",
    Model: "Mustang",
    displayDetails:function displayDetails() {
    console.log(this.brand + " " + this.Model);
}

}


car.displayDetails();