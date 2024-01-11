document.addEventListener("DOMContentLoaded", function () {
    var imageList = document.getElementById("imageList");
    var images = imageList.getElementsByTagName("img");

    imageList.addEventListener("scroll", function () {
        var scrollTop = imageList.scrollTop;

        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            var distanceFromTop = image.offsetTop - scrollTop;
            var scaleFactor = 1 - Math.abs(distanceFromTop) / imageList.clientHeight;

            // Aplica estilos basados en la posición de desplazamiento
            image.style.transform = "scale(" + scaleFactor + ")";
            image.style.zIndex = scaleFactor * 1000;
            image.style.filter = "blur(" + (1 - scaleFactor) * 10 + "px)";
        }
    });
});
