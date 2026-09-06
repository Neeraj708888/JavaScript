function findAnyNonRepearedChar (str, position) {
  let found = 0;

  for (let i = 0; i < str.length; i++) {
    let count = 0;

    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }

    if (count === 1) {
      found++;
      if (found === position) {
        return str[i];
      }
    }
  }

  return null;
}

console.log(findAnyNonRepearedChar("swiss", 1)); // "w"
