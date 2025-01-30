const fibonacci = function(n) {
    if (Number.parseInt(n) !== NaN) {
        n = Number.parseInt(n);
    }
    if (n < 0) {
        return "OOPS";
    }
    if (n === 0 || n === 1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
};

// Do not edit below this line
module.exports = fibonacci;
