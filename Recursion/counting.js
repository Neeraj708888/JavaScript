
function counts (n) {
    if (n > 5) return;  // Base Condition

    console.log(n);

    counts(n + 1); // Recursive Call
}

counts(1);