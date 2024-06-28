function toggleMenu() {
    const nav = document.querySelector(".nav-bar");
    const icon = document.querySelector(".hamburger-nav");
    nav.classList.toggle("open");
    icon.classList.toggle("open");
}