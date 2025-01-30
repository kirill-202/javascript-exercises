const reverseString = function(stringToReverse) {

    if (stringToReverse.lenght === 0) {
        return "";
    }
    const letterArr = stringToReverse.split("");
    let finStr = "";

    for (let i=letterArr.length-1; i >= 0; i--) {
        finStr += letterArr[i];
        console.log(i);
    }

    return finStr;
};

// Do not edit below this line
module.exports = reverseString;


console.log(reverseString(""));