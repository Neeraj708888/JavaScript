// 5 = 5 * 4 * 3 * 2 * 1
function factorial(n) {
if (n === 1) return 1;  // Base Condition

return n * factorial(n - 1);  // Recursive Call
}

console.log(factorial(5));