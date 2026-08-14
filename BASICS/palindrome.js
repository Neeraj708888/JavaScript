function palindrome(values) {
    // Base checks
    let original = values;
    let reversed = 0;

    // Edge Case: Check if data is a valid number type and not negative
    if (typeof values < 0) {
        console.log(values + ' is not palindrome');
        return;
    }

    while (values > 0) {
        let digit = values % 10; // get the last digit
        reversed = (reversed * 10) + digit; // Build the reversed number
        values = Math.floor(values / 10);  // Remove the last digit
    }

    if (reversed === original) {
        console.log(original + ' is Palindrome');
    } else {
        console.log(original + ' is not palindrome');
    }
}

console.log(palindrome(-121));