// Change navbar color on scroll
const navbar = document.getElementById('navbarSite');

window.onscroll = function () {
    if (window.pageYOffset > 200) {
        navbar.classList.remove("bg-transparent", "navbar-dark");
        navbar.classList.add("bg-light", "navbar-light");
    } else {
        navbar.classList.add("bg-transparent", "navbar-dark");
        navbar.classList.remove("navbar-light", "bg-light");
    }
}