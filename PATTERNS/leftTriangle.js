// *
// *  *
// *  *  *
// *  *  *  *
// *  *  *  *  *

function leftTriangle(n) {
    let triangle = '';

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            triangle += '* ';
        }

        triangle += '\n';  // for new line after each row
    }

    console.log(triangle);
}

leftTriangle(5);

