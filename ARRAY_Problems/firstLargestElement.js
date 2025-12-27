
function firstLargestElement(arr) {

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
 }

 console.log(firstLargestElement([3, 5, 7, 2, 8])); // 8
 console.log(firstLargestElement([-10, -3, -1, -7])); // -1