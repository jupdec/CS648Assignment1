/*eslint-env browser*/

var coinFlip;
for (let i = 1; i <= 10; i += 1) {
    coinFlip = Math.round(Math.random());
    if (coinFlip) {
        window.console.log("Heads");
    } else {
        window.console.log("Tails");
    }
}