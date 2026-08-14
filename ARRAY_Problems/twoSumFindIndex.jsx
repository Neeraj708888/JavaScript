function twoSumFindIndex(arr, target) {
    // i = 0 => 1,
    for (let i = 0; i < arr.length; i++) {
        // j = 0 + 1 => 5,
        for (let j = i + 1; j < arr.length; j++) {
            // arr[0] + arr[1] = 1 + 5 => 6, 6 === 8 -> false
            // arr[0] + arr[2] = 1 + 2 => 3, 3 === 8 -> false
            // arr[0] + arr[3] = 1 + 4 => 5, 5 === 8 -> false
            // arr[0] + arr[4] = 1 + 6 => 7, 7 === 8 -> false
            // arr[0] + arr[5] = 1 + 7 => 8, 8 === 8 -> true
            if (arr[i] + arr[j] === target) {
                // i = 0, j = 5, [0, 5]
                return [i, j];
            }
        }
    }
    return [];
}

console.log(twoSumFindIndex([1, 5, 2, 4, 6, 7], 8));