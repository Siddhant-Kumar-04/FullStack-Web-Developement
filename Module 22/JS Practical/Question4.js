function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data received Successfully");
        }, 1000);
    })
}

function orderDetails() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Order Placed Successfully");
        }, 2000);
    })
}

function PaymentStatus() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Payment Done Successfully");
        }, 3000);
    })
}

function OrderCompleted() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Order Placed Successfully");
        }, 3000);
    })
}

async function ProcessOrder() { 
    try {
        const UserData = await fetchData();
        console.log(UserData);
        const OrderInfo = await orderDetails();
        console.log(OrderInfo);
        const PaymentInfo = await PaymentStatus();
        console.log(PaymentInfo);
        const CompletionInfo = await OrderCompleted();
        console.log(CompletionInfo);
    }
    catch (error) { 

        console.error("Error processing order:", error);
    }
}

ProcessOrder();