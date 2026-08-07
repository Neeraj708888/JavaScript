//                  *
//                 * *
//                *   *
//               *     *
//              *       *
//               *     *
//                *   *
//                 * *
//                  *


function diamond(value) {

    // Upper Half 
    for (let i = 1; i <= value; i++) {

        let row = "";

        // Spaces
        for (let j = 1; j <= value - i; j++) {
            row += " ";
        }

        // Stars and inner space
        for (let s = 1; s <= 2 * i - 1; s++) {
            if (s === 1 || s === 2 * i - 1) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }

    // Lower Half
    for (let i = value - 1; i >= 1; i--) {
        let row = "";

        // Space
        for (let j = 1; j <= value - i; j++) {
            row += " ";
        }

        // Start or inner space
        for (let s = 1; s <= 2 * i - 1; s++) {

            if (s === 1 || s === 2 * i - 1) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}

console.log(diamond(5));