
function rightRotation (arr, position) {
    let l = arr.length;

    position = position % l; // In case position is greater than array length

    for (let i = 0; i < position; i++) {
        let lastElelement = arr[l - 1];

        for (let j = l - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }

        arr[0] = lastElelement;
    }

    return arr;
}

console.log(rightRotation([1, 2, 3, 4, 5], 2)); // [4,5,1,2,3]