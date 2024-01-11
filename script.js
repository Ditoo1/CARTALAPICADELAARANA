document.addEventListener("DOMContentLoaded", function () {
    // Manejar el evento load para asegurarnos de que todos los recursos se carguen
    window.addEventListener("load", function () {
        // Simula un tiempo de carga, por ejemplo, 2 segundos
        setTimeout(function () {
            // Oculta la pantalla de carga al agregar la clase 'hidden'
            document.getElementById("loader-wrapper").classList.add("hidden");
        }, 2000);
    });
});