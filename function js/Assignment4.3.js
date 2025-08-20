//create a simple interest calculator
function simpleInterestCalculator (principle,rate,time) {
    let interest = principle * rate*time/100;
    return interest;
}

let interest1 = simpleInterestCalculator(100,10,5);
let interest2 = simpleInterestCalculator(400,40,7);


console.log("simple interest is:",interest1);
console.log("simple interest is:" ,interest2);

