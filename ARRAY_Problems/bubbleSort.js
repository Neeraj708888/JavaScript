// Time Complexity = O(n2)
// Space Complexity = O(1)

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        /*
        i = 0, i = 1, i = 2
        */
        for (let j = 0; j < n - i - 1; j++) {
        /*
        j = 0, g = 1, j = 3
        */
            if (arr[j] > arr[j + 1]) {
                /*
                arr[0] > arr[0 + 1] : 5 > 1 : true
                arr[0] > arr[0 + 1] : 5 > 1 : true
                arr[0] > arr[0 + 1] : 5 > 1 : true
                arr[0] > arr[0 + 1] : 5 > 1 : true
                arr[0] > arr[0 + 1] : 5 > 1 : true
                */
                // Swapping
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                /*
                [arr[0]=5, arr[0+1]=1] = [1,5]
               */
            }
        }
    }
    return arr;
}

let arr = [5, 1, 4, 3, 6, 7];
console.log(bubbleSort(arr));