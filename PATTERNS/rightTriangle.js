//              *
//           *  *
//        *  *  *
//     *  *  *  *
//  *  *  *  *  *

function rightTriangle(n) {
    let triangle = '';

    for (let i = 1; i <= n; i++) {
        // add spaces for right alignment

        for (let j = 1; j <= n - i; j++) {
            triangle += '  ';
        }

        // Print stars for each row
        for (let k = 1; k <= i; k++) {
            triangle += '* ';
        }

        triangle += '\n';  // for new line after each row
    }
    console.log(triangle);
}

rightTriangle(5);