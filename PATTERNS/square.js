// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function drawSquare(size) {

    let square = '';
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            square += '* '
        }
        square += '\n';   // for new line after each row 
    }
    console.log(square)
}

drawSquare(5);