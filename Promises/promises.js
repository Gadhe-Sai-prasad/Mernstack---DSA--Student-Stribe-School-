const car = ["shoes","pants","kurtas"];

const promise = createOrder(cart);

promise.then(function () {
    proceedToPayment(order Id);

})
//producer

function createOrder(cart) {
    const pr = new Promise(function (resolve,reject) {
        if (!validCart(cart)) {
            const err = new Error ("Cart is not valid");
            rejct (err);


        }
        const orderId = "1234567";
        if(orderId) {
            resolve(orderId);

        }
    });
} return pr;