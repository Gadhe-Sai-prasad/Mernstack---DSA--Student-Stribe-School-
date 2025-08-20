//create a function that determines grade from marks

function getGrade(marks) {
    if(marks>90) {
        return "A";

    } else if(marks>80) {
        return "B";
    } else if (marks>70) {
        return "C";
    } else if(marks >60) {
        return "D";
    } else {
        return "F";
    }

}

let grade1 = getGrade(85);
let grade2 = getGrade(65);
let grade3 = getGrade(54);


console.log("85 marks = ",grade1);
console.log("65 marks = ",grade2);
console.log("54 marks = ",grade3);
