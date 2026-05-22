const headerEl = document.querySelector("header");
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > window.innerHeight - 100) {
        headerEl.classList.add("transparent");
    } else {
        headerEl.classList.remove("transparent");
    }
});

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
        headerEl.classList.add("scroll");
    } else {
        headerEl.classList.remove("scroll");
    }
});