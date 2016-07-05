var locations = new Array("./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg", "./img/6.jpg", "./img/7.jpg", "./img/8.jpg", "./img/9.jpg", "./img/10.jpg");
var currentImage = 0;

function nextImage() {
    currentImage++;
    if (currentImage == locations.length)
        currentImage = 0;
    document.images["picture"].src = locations[currentImage];
    return false;
}