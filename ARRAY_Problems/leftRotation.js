
function leftRotation (arr, position) {
    let l = arr.length;

    position = position % l; // In case position is greater than array length

    for (let i = 0; i < position; i++) {
        let firstElement = arr[0];

        for ( let j = 0; j < l - 1; j++) {
            arr[j] = arr[j + 1];
        }

        arr[l-1] = firstElement;
    }
    return arr;
}

console.log(leftRotation([1, 2, 3, 4, 5], 3)); // [3,4,5,1,2]