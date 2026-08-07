// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *

function drawRectangle(width, height) {

    let rectangle = '';

    for (let i = 1; i <= height; i++) {

        for (let j = 1; j <= width; j++) {
            rectangle += '* ';
        }
        rectangle += '\n';   // for new line after each row
    }
    console.log(rectangle)
}

drawRectangle(6, 5);