//create a function that calculates age from birth year
function calculateAge ( birthyear,currentyear) {
    return currentyear- birthyear;
}

let year1 = calculateAge(2003,2025);
let year2 = calculateAge(2000,2025);

console.log(year1);
console.log(year2);