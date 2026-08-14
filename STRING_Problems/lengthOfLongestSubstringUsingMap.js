function lengthOfLongestSubstringUsingMap(str) {
    let maxLength = 0, left = 0;
    let charMap = new Map();

    for (let right = 0; right < str.length; right++) {
        const currentChar = str[right];

        // If character is already inside the character window
        // slide the left pointer to the right of its last seen position
        if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
            left = charMap.get(currentChar) + 1;
        }

        // Record/update the position of the character
        charMap.set(currentChar, right);

        // Update the maximum length found so far
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstringUsingMap('cadbzabcd'));