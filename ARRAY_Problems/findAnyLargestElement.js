// Find Any Largest Element In An Array O(n * k)

function findAnyLargest (arr, position) {
  let largest;
  
  for (let i = 1; i <= position; i++) {
    
    largest = -Infinity;
    
    // Find current largest number
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > largest) {
        
        largest = arr[j];
      }
    }
    
    // Remove that largest number found in current iteration
   for (let k = 0; k < arr.length; k++) {
      if (arr[k] === largest) {
      arr[k] = -Infinity;
      break;
    }
   }
  }
  
  return largest;
}

console.log(findAnyLargest([12,4,13,6,10,14], 2));
// [4,6,10,12,13,14]