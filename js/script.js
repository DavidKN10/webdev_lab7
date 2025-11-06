function handleClick() {
    let entryInput = document.getElementById("entryinput");
    let output = document.getElementById("textoutput"); 
    output.innerHTML = entryInput.value;
    alert("David: " + entryInput.value);
}

function init() {
    let entryButton = document.getElementById("entrybutton");
    entryButton.addEventListener('click', handleClick);
}
 
window.addEventListener('load', init);
