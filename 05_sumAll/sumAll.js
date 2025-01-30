const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if (typeof num1 !== "number" && typeof num2 !== "number") {
        return "ERROR";
    }

    if (!(Number.isInteger(num1) && Number.isInteger(num2))) {
        return "ERROR";
    }
    
    let biggest = num1 > num2 ? num1 : num2;
    let lowest = num1 < num2 ? num1 : num2;
    
    let sum = 0;

    for (i=lowest; i<= biggest; i++) {
        sum +=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(5,1));