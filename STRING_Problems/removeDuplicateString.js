
function removeDuplicateString (str) {
let result = "";

for (let i = 0; i < str.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < i; j++) {
        if (str[i] === str[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        result += str[i];
    }
}
return null || result;
}

console.log(removeDuplicateString("programming")); // Output: "progamin"