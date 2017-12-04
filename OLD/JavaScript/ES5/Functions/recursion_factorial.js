function factorial  (number, cache) {
    cache = cache || 1;
    if (number < 2) {
        return cache;
    }
    return factorial(number-1, cache * number);
}

console.log(factorial(100));