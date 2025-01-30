const repeatString = function(text, numRep) {

    if (numRep < 0 ) {
        return "ERROR";
    }
    let finString = "";
    for (let i=0; i < numRep; i++) {
        finString += text;
    }
    return finString;
};

// Do not edit below this line
module.exports = repeatString;
