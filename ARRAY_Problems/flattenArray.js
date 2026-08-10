// Time Complexity - O(n)
// Space Complexity - O(n)

// Step 1 : Define funtion and pass arr
// Step 2: create variable result = [] to return with new Array
// Step 3: Traverse the original with their actual length
// Step 4: Check comming elelment is nested array --> if Yes
// Step 5: Recusive call for same function and store element in flat array variable
// Step 6: Traversing the flat Array and append the element in result
// Step 6: if commin element is Not array then simply push or append element in result
// Step 7: Return the result 
function flatArray(arr) {
    // length = 4 [3,4,[5,6],[7]]
    // length = 2 [5,6]
    // length = 1 [7]
    let n = arr.length;

    let result = []; // [1,2,3,4,5,6]

    // [1,2,[3,4,[5,6],[7]], 8]
    // i = 0, 
    // i = 1, 
    // i = 2, --> [3,4,[5,6],[7]], i = 0, i = 1, i = 2 => [5,6] (i = 0, i = 1), i = 3 => [7] (i = 0)
    // i = 3, --> 8
    for (let i = 0; i < n; i++) {
        // arr[0] = 1 --> Array hai - false
        // arr[1] = 2 --> Array hai - false
        // arr[2] = [3,4,[5,6],[7]] --> Array hai - true --> 
        // (arr[0] = 3 --> Array hai --> false , arr[1] = 4 --> Array hai --> false --> 
        // {arr[2] = [5,6] --> Array hai --> true -> (arr[0] = 5 --> Array hai --> false arr[1] = 6 --> Array hai --> false, 
        // (arr[3] = [7] --> Array hai --> true (arr[0] = 7 --> Array hai --> false))}
        // arr[3] = 8 --> Array hai --> false
        if (Array.isArray(arr[i])) {

            // arr[3] = [3,4,[5,6],[7]]
            // arr[2] = [5,6]
            // arr[3] = [7]
            let flat = flatArray(arr[i])  // [3,4,5,6,7]
            console.log("Flat Values: ", flat);
            // [3] -> [3,4] -> [3,4,5] -> [3,4,5,6] -> [3,4,5,6,7]
            for (let j = 0; j < flat.length; j++) {
                result[result.length] = flat[j];  // append the element
                // result.push(flat[j]); // [3,4,5,6,7]


            }
        } else {
            result[result.length] = arr[i]; // append the element
            // result.push(arr[i]);
            // [1] -> [1,2]
        }
    }

    return result;
}

let arr = [1, 2, [3, 4, [5, 6], [7]], 8];
console.log(flatArray(arr));


let final = [1, 2], idx = 0;
let indx = 0;
let result = [3, 4, 5, 6];

for (let i = 0; i < result.length; i++) {
    final[final.length] = result[i];
    // final[indx++] = result[i];

}
console.log("Final Result: ", final)