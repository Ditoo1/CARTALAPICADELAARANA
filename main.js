document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".scrollable-tabs-container a");
    const platosSections = document.querySelectorAll(".platos > div");
    const seccionComida = document.querySelector(".seccion-comida");
    const seccionBebidas = document.querySelector(".seccion-bebidas");
    const seccionTragos = document.querySelector(".seccion-tragos");
    const coctelesclasicos = document.getElementById("8x");

    const removeAllActiveClasses = () => {
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
    };

    const hideAllPlatosSections = () => {
        platosSections.forEach((section) => {
            section.style.display = "none";
        });
    };

    const hideAllSecciones = () => {
        hideAllPlatosSections();
        seccionComida.style.display = "none";
        seccionBebidas.style.display = "none";
        seccionTragos.style.display = "none";
    };

    // Ocultar todas las secciones al inicio
    hideAllPlatosSections();
    hideAllSecciones();

    // Mostrar la sección de platos fríos por defecto
    platosSections[2].style.display = "block";

    // Simular clic en la pestaña de comida al cargar la página
    tabs[0].classList.add("active");
    seccionComida.style.display = "block";

    tabs.forEach((tab) => {
        tab.addEventListener("click", (event) => {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            removeAllActiveClasses();
            hideAllPlatosSections();
    
            tab.classList.add("active");
            const targetSectionId = tab.getAttribute("href").substring(1);  // Obtiene el ID de la sección
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });
    // Agregar event listener para el cambio del switch principal
    const switchField = document.querySelector(".switch-field");
    switchField.addEventListener("change", (event) => {
        const selectedValue = event.target.value;
        hideAllSecciones();
        removeAllActiveClasses();

        switch (selectedValue) {
            case "platos":
                seccionComida.style.display = "block";
                tabs[0].classList.add("active");
                platosSections[2].style.display = "block";
                break;
            case "bebidas":
                seccionBebidas.style.display = "block";
                break;
            case "tragos":
                seccionTragos.style.display = "block";
                coctelesclasicos.classList = "active";
                document.querySelector("#autor").style.display = "block";
                break;
            default:
                // Manejar cualquier otro caso según sea necesario
                break;
        }
    });

});
