function longestSubstring(str) {
    let maxLength = 0, left = 0, maxStart = 0;
    const charIndexMap = {};

    for (let right = 0; right < str.length; right++) {
        const currentChar = str[right];

        // Agar character windom k andar dubara hai
        if (currentChar in charIndexMap && charIndexMap[currentChar] > left) {
            left = charIndexMap[currentChar] + 1;
        }

        charIndexMap[currentChar] = right;

        // Agar new window ki length old window wali se badi hai
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            maxLength = left; // New start index track kar liya
        }
    }
    // Slice ka use karke actual substrin nakali (start index se lekar start + length tak)
    const longestSubStr = str.slice(maxStart, maxStart + maxLength);

    // Ab aap dono ko return kar sakte ho length and subsrtinng
    return {
        length: maxLength,    // 4
        subString: longestSubStr,  // cabd
    }
}

console.log(longestSubstring('cadbzabcd'));