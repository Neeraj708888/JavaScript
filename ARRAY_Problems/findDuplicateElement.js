// Time Complexity - O(n3)
// Space Complexity - O(n)

function findDuplicate(arr) {
    let duplicate = [], index = 0, start = 0, end = arr.length;

    while (start < end) {
        let alreadyExist = false;

        for (let i = start + 1; i < end; i++) {

            if (arr[start] === arr[i]) {

                // Push Element in duplicate Array
                for (let j = 0; j < index; j++) {

                    if (duplicate[j] === arr[start]) {
                        alreadyExist = true;
                        break;
                    }
                }

                if (!alreadyExist) {
                    duplicate[index] = arr[start];
                    index++;
                }
            }
        }
        start++;
    }
    console.log(duplicate);
}


let arr = [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5, 6, 4, 4, 5, 5];
findDuplicate(arr); 

function findDuplicates (arr) {
    let l = arr.length, duplicates = [], index = 0;

    for (let i = 0; i < l; i++) {

        for (let j = i + 1; j < l; j++) {

            if (arr[i] === arr[j]) {

                isAlreadyAdded = false;

                for (let k = 0; k < index; k++) {

                    if (arr[k] === arr[i]) {

                        isAlreadyAdded = true;
                        break;

                    }
                }

                if (!isAlreadyAdded) {

                    duplicates[index++] = arr[i];

                }
            }
        }
    }

    return duplicates;
}

// let arr = [2,3,3,4,5,6,6,7,7];
// console.log(findDuplicates(arr));