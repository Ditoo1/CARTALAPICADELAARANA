document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const pages = document.querySelectorAll(".page");
    let currentPage = 0;

    container.addEventListener("wheel", handleScroll);

    function handleScroll(event) {
        const delta = event.deltaY;

        if (delta > 0 && currentPage < pages.length - 1) {
            currentPage++;
        } else if (delta < 0 && currentPage > 0) {
            currentPage--;
        }

        scrollToPage(currentPage);
    }

    function scrollToPage(pageIndex) {
        const scrollAmount = pageIndex * container.clientHeight;
        container.scrollTo({
            top: scrollAmount,
            behavior: "smooth"
        });
    }
});