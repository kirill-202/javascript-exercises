const removeFromArray = function(arr, ...rem) {
    for (let val of rem) {
        if (!(arr.includes(val))) {
            let i  = rem.indexOf(val);
            rem.splice(i, 1);
        }
    }
    if (rem.length == 0) {
        return arr;
    }

    const filteredArray = arr.filter(item => !rem.includes(item));
    console.log(filteredArray);
    return filteredArray;


};

// Do not edit below this line
module.exports = removeFromArray;

console.log(removeFromArray([1,2,3]));