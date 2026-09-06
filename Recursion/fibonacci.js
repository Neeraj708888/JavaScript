function fibnacci(n) {
    if (n === 0) return 0; // Base Condition
    if (n === 1) return 1; // Base Condition

    return fibnacci(n - 1) + fibnacci(n - 1); // Recursive Call
}

console.log(fibnacci(5));

// loop
function fibonacciLoop(n) {
    let a =  0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        console.log(a);
        let next = a + b;   // 0 + 1 = 1, 1 + 1 = 2, 2 + 1 = 3, 3 + 2 = 5,...
        b = a;  // b = 1, b = 1, b = 2, b = 3,...
        a = next;  // a = 1, a = 2, a = 3, a = 5,...
    }

}
fibonacciLoop(10);