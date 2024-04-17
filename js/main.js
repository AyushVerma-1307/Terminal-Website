var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];
var password = "password"

setTimeout(function() {
  loopLines(banner, "", 80);
  loopLines(suggestion, "", 2500);
  textarea.focus(); 
  // It's used to set focus on a textarea element in HTML. 
  // When an element has focus, it is ready to receive input from the user
}, 100);