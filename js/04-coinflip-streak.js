/*eslint-env browser*/

var coinFlip;
do {
    coinFlip = Math.round(Math.random());
    if (coinFlip) {
        window.document.write("Heads<br>");
    } else {
        window.document.write("You finally got tails...game over!");
    }
} while (coinFlip);