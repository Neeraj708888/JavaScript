//  *   *   *   *   *
//    *   *   *   *
//      *   *   *
//        *   *
//          * 

function reverseTriangle(rows) {
    let triangle = '';

    for (let i = rows; i >= 1; i--) {
        // add spaces for left alignment
        for (let j = 1; j <= rows - i; j++) {

            triangle += '  ';
        }

        // Print stars for each row
        for (let k = 1; k <= i; k++) {
            triangle += '* ';
            if (k < i) {
                triangle += '  '; // add dual spaces between stars
            }
        }
        triangle += '\n';  // for new line after each row
    }
    console.log(triangle);
}

reverseTriangle(5);