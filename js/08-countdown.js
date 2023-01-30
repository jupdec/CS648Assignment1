/*eslint-env browser*/

var num = parseInt(window.prompt("Enter a number to count down from: "), 10);
var i;

for (i = num; i >= 0; i -= 1) {
    window.document.write(i + "<br>");
}
