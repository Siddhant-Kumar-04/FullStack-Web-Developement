function BankAccount(){
    this.balance = 0;
}

BankAccount.prototype.deposit = function (amount) { 
    this.balance += amount;
}

BankAccount.prototype.withdraw = function (amount) { 
    if (this.balance < amount) {
        console.log("Insufficient funds");
    } else {
        this.balance -= amount;
    }
}


BankAccount.prototype.getBalance = function () { 
    return this.balance;
}

const person1 = new BankAccount();
person1.deposit(1000);
person1.withdraw(500);
console.log("Balance of person1: " + person1.getBalance()); // 500
const person2 = new BankAccount();
person2.deposit(2000);
person2.withdraw(1000);
console.log("Balance of person2: " + person2.getBalance()); // 1000