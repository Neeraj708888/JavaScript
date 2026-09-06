// Using Object O(n)
function countOccurrenceEachChar(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (charCount[char] === undefined) {
      charCount[char] = 1; //  first time seeing the character
    } else {
      charCount[char]++; // increment count if character already seen
    }
  }
  return charCount;
}

console.log(countOccurrenceEachChar("hello world"));

// Using Array O(n2);

function countOccurrenceEachCharArray(str) {
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    let alreadyCounted = false;
    // Check if character is already counted
    for (let j = 0; j < i; j++) {
        if (str[i] === str[j]) {
            alreadyCounted = true;
            break;
        }
    }
    if (alreadyCounted) continue;

    for (let k = 0; k < str.length; k++) {
        if (str[i] === str[k]) {
            count++;
        }
    }

    console.log(str[i] + ": " + count);
  }
}

countOccurrenceEachCharArray("hello programming");