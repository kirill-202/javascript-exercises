const palindromes = function (str) {
    const regex = /\W+/g;
    const modStr = str.toLowerCase().replace(regex, "");

    const arrS = modStr.split("").reverse();
    const reversed = arrS.join("");
    if (modStr === reversed) {
        return true;
    }
    return false;
    
};

// Do not edit below this line
module.exports = palindromes;
