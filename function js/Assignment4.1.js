//create a function that calculates total bill with tip

function calculateBill (foodCost,tipPercent) {
    let tipAmount = foodCost * tipPercent /100;
    let totalBill = foodCost + tipAmount;
    return totalBill;
}

let bill1 = calculateBill(1500,10);
let bill2 = calculateBill(700,20);


console.log("total bill amount is:RS" + bill1);
console.log("Total bill Amount is :RS" + bill2);