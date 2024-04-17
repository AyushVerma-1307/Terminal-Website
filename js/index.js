function $(elid) {
    // This is a helper function that takes an ID string as its argument
    return document.getElementById(elid);
}

var cursor;

// This line of code sets the init function to be called when the window finishes loading.
window.onload = init;

function init() {
    cursor = $("cursor");
    cursor.style.left = "0px";
}

function typeIt(from, e) { // used to update the content of an HTML element, based on the input provided by the user in a text area.
    e = e || window.event; 
    // window.event: the current event that is being handled by the browser
    // e: the event that was triggered by the user action (such as a key press)
    var w = $("typer");
    var tw = from.value;
    if (!pw){
      w.innerHTML = nl2br(tw);
    }
  }
