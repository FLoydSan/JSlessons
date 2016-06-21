/**
 * Created by Aleksandr on 6/21/2016.
 */
var tip = document.getElementsByTagName('img'), mouseX, mouseY;

function captureCursor() {
    mouseX = event.clientX;
    mouseY = event.clientY;
    return mouseX, mouseY;
}

function showTip(tipObject) {
    tip = tipObject;
    displayTip();

}

function displayTip() {
    tip.style.pixelLeft = mouseX;
    tip.style.pixelTop = mouseY;
    tip.style.display = "block";
}

function hideTip() {
    tip.style.display = "none";
}

function setBackgroud(tipObject) {
    document.body.style.backgroundImage = "url(" + tip + ")";
}