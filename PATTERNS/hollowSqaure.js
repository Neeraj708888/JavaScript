//  * * * * *
//  *       *
//  *       *
//  *       *
//  * * * * *

function hollowSqaure(value) {

    for (let i = 1; i <= value; i++) {

        let row = "";

        // Stars or Space
        for (let j = 1; j <= value; j++) {

            if (j === 1 || j === value || i === 1 || i === value) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}
console.log(hollowSqaure(5));