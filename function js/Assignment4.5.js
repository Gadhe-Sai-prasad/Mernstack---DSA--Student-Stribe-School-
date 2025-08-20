//create a function that applies discount
function discountPercent(price,discount) {
    let discountAmount = price*discount /100;
    let finalPrice = price - discountAmount;
    return finalPrice;
}

let price1 = discountPercent(400,15);
let price2 = discountPercent(300,20);

console.log("₹400 with 15% off ",price1);
console.log("₹300 with 20% off = ",price2);