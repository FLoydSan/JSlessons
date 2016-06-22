/**
 * На странице должны быть расположены несколько фото-миниатюр. При наведении мыши на миниатюру, рядом с ней появляется всплывающий блок, где это фото видно в увеличенном виде.
 * При клике на миниатюру, выбранное фото становится фоном всей страницы..
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