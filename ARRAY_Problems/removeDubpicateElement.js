

function removeDuplicateElements(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            arr[result] = arr[i];            
            result++;
        }
    }
    arr.length = result;
    // console.log(arr.length);
    return arr;
}

console.log(removeDuplicateElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5] 