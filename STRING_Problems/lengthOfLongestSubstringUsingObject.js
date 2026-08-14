
function lengthOfLongestSubstringUsingObject(str) {
    let maxLength = 0, start = 0;
    const charIndexMap = {};

    for (let right = 0; right < str.length; right++) {
        const currentChar = str[right];

        // Check if character exists in Object AND its index is within the current window
        if (currentChar in charIndexMap && charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }

        // Store the update the index of the character
        charIndexMap[currentChar] = right;

        maxLength = Math.max(maxLength, right - start + 1);
    }
    return maxLength;
}

console.log(lengthOfLongestSubstringUsingObject('cadbzabcd'));