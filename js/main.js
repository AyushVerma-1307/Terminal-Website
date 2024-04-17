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

function enterKey(e) {
    if (e.keyCode == 181) { // Audio mute key
      document.location.reload(true); // the page will be reloaded with a hard reload
    }
    if (pw) {
      let et = "*"; // often used to mask passwords by replacing each character with an asterisk
      let w = textarea.value.length;
      command.innerHTML = et.repeat(w);
      if (textarea.value === password) {
        pwd = true;
      }
      if (pwd && e.keyCode == 13) { // 13: Enter key
        loopLines(secret, "color2 margin", 120);
        command.innerHTML = "";
        textarea.value = "";
        pwd = false;
        pw = false;
        liner.classList.remove("password");
      } else if (e.keyCode == 13) {
        addLine("Wrong password", "error", 0);
        command.innerHTML = "";
        textarea.value = "";
        pw = false;
        liner.classList.remove("password");
      }
    } else {
      if (e.keyCode == 13) {
        commands.push(command.innerHTML);
        git = commands.length;
        addLine("guest@ayushterminal.web.app:~$ " + command.innerHTML, "no-animation", 0);
        commander(command.innerHTML.toLowerCase());
        command.innerHTML = "";
        textarea.value = "";
      }
      if (e.keyCode == 38 && git != 0) { // 38: Arrow Up Key
        git -= 1;
        textarea.value = commands[git];
        command.innerHTML = textarea.value;
      }
      if (e.keyCode == 40 && git != commands.length) { // 40: Arrow Down Key
        git += 1;
        if (commands[git] === undefined) {
          textarea.value = "";
        } else {
          textarea.value = commands[git];
        }
        command.innerHTML = textarea.value;
      }
    }
  }