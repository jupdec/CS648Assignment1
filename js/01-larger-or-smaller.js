/*eslint-env browser*/
const logToUIandConsole=(value)=>{
    window.document.write(value);
    window.console.log(value);
}
var num1 = parseInt(window.prompt("Enter the first number"), 10);
var num2 = parseInt(window.prompt("Enter the second number"), 10);

if (num1 > num2) {
    logToUIandConsole("The larger number is " + num1 + ".");
} else if (num2 > num1) {
    logToUIandConsole("The larger number is " + num2 + ".");
} else {
    logToUIandConsole("Both numbers are equal !");
}
