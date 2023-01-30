var coinFlip;
do {
    coinFlip = Math.round(Math.random());
    if (coinFlip) {
        window.document.write("Tails");
    }
    else {
        window.document.write("Heads<br>");
    }
} while (coinFlip === 0);