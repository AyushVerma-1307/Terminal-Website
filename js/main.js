var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];
var password = "password";

setTimeout(function () {
    loopLines(banner, "", 80);
    loopLines(suggestion, "", 2500);
    textarea.focus();
    // It's used to set focus on a textarea element in HTML.
    // When an element has focus, it is ready to receive input from the user
}, 100);

window.addEventListener("keyup", enterKey);
// This code sets up an event listener for the keyup event on the window object
// When the user releases a key on the keyboard, the enterKey function will be called

console.log(
    // %c is a placeholder for a style string
    '%cHa Ha, proud of you, my "inspect" warrior friend!',
    "color: #04ff00; font-weight: bold; font-size: 18px;"
);

console.log(
    "%cVoila! The magical phrase you've been questing for! Password: '" +
        password +
        "' - I wonder what it does?🤔",
    "color: grey"
);
