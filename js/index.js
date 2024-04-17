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

