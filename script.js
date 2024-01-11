document.addEventListener("DOMContentLoaded", function () {
    var imageList = document.getElementById("imageList");
    var images = imageList.getElementsByTagName("img");
    var imageHeight = images[0].offsetHeight;

    // Establece la posición inicial de desplazamiento al comienzo
    imageList.scrollTop = 0;

    imageList.addEventListener("scroll", function () {
        var scrollTop = imageList.scrollTop;

        // Calcula el índice de la imagen visible
        var visibleImageIndex = Math.floor(scrollTop / imageHeight);

        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            var distanceFromTop = image.offsetTop - scrollTop;
            var isCurrentImage = i === visibleImageIndex;

            // Aplica estilos solo a la imagen visible
            if (isCurrentImage) {
                var scaleFactor = Math.max(0, 1 - Math.abs(distanceFromTop) / imageList.clientHeight);
                image.style.transform = "scale(" + scaleFactor + ")";
                image.style.zIndex = scaleFactor === 0 ? -1 : 1;
                image.style.filter = "blur(" + (1 - scaleFactor) * 10 + "px)";
            } else {
                // Restablece estilos para las otras imágenes
                image.style.transform = "scale(1)";
                image.style.zIndex = 0;
                image.style.filter = "blur(0)";
            }
        }
    });
});
