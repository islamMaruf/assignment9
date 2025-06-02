function doMathThings(a, b) {
    let result = 0;
    let unusedVariable = 123; // ← unused variable (code smell)

    if (a === b) { // Changed to strict equality
        result = a + b;
    } else {
        result = a * b; // Removed redundant condition
    }

    return result;
}

module.exports = {
    doMathThings
};