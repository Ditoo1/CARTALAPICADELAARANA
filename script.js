document.addEventListener("DOMContentLoaded", function () {
    var imageList = document.getElementById("imageList");
    var images = imageList.getElementsByTagName("img");

    // Calcula la altura total de las imágenes en el contenedor
    var totalImageHeight = Array.from(images).reduce(function (total, img) {
        return total + img.offsetHeight;
    }, 0);

    // Calcula la posición inicial de desplazamiento para centrar la primera imagen
    imageList.scrollTop = (totalImageHeight - window.innerHeight) / 2;

    imageList.addEventListener("scroll", function () {
        var scrollTop = imageList.scrollTop;

        // Calcula el índice de la imagen visible
        var visibleImageIndex = Math.floor(scrollTop / window.innerHeight);

        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            var isCurrentImage = i === visibleImageIndex;

            // Aplica estilos solo a la imagen visible
            if (isCurrentImage) {
                var distanceFromTop = image.offsetTop - scrollTop;
                var scaleFactor = Math.max(0, 1 - Math.abs(distanceFromTop) / window.innerHeight);
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
