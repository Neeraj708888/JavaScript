// Samae Letter + Same Count + Different Order = Anagram Strings ["Listen" & "Silent"]

// From using Array
function anagram (str1, str2) {
    if (str1.length !== str2.length) return false;

    let arr1 = str1.toLowerCase().split('').sort().join('');
    let arr2 = str2.toLowerCase().split('').sort().join('');

    return arr1 === arr2;
}

console.log(anagram("Listen", "Silent")); // true

// From using Object
function anagramStrings (str1, str2) {
    if (str1.length !== str2.length) return false;

    let charCount = {};

    for (let ch of str1.toLowerCase()) {
        charCount[ch] = (charCount[ch] || 0) + 1;
    }

    for (let ch of str2.toLowerCase()) {
        if (!charCount[ch]) {
            return false;
        } 

        charCount[ch]--;
    }
    return true;
}

console.log(anagramStrings("Listen", "Silent")); // true