//find the largest number 
function largestOfTwoNumbers(num1,num2) {
    if(num1>num2) {
        return "num1 is greatest";
    }
    else {
        return "num2 is greatest"; 
    }
    
}
let number1 = largestOfTwoNumbers(4,5);
let number2 = largestOfTwoNumbers(7,4);

console.log(number1);
console.log(number2);