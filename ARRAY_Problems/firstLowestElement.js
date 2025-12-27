
function firstLowestNumber(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
        min = arr[i];
        }
    }
    return min;
}

console.log(firstLowestNumber([3, 5, 7, 2, 8])); // 2
console.log(firstLowestNumber([-10, -3, -1, -7])); // -10