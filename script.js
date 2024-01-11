document.addEventListener("DOMContentLoaded", function () {
    // Simula un tiempo de carga, por ejemplo, 2 segundos
    setTimeout(function () {
        // Oculta la pantalla de carga
        document.getElementById("loader-wrapper").style.display = "none";
    }, 2000);
});
