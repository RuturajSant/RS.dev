const navbar = document.getElementById("navbar-fixed-top");
const checkbox = document.getElementById("toggle");
const links = document.querySelectorAll(".navbar-nav li a");
const homeLink = document.querySelector(".navbar-brand");
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    loader.classList.add("remove-loader");
});



homeLink.addEventListener("click", function () {
    if (window.innerWidth < 1024) {
        checkbox.checked = false;
    }
})
links.forEach(link => {
    link.addEventListener("click", function () {
        if (window.innerWidth < 1024) {
            checkbox.checked = false;
        }
    })
});

var prevScrollpos = window.pageYOffset;
navbar.classList.add("ot")

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (window.pageYOffset <= 40) {
        if (navbar.classList.contains("os")) {
            navbar.classList.replace("os", "ot");
        }
        if (navbar.classList.contains("osu")) {
            navbar.classList.replace("osu", "ot");
        }
        navbar.classList.add("ot")
    }
    else if (prevScrollpos > currentScrollPos) {//up
        if (navbar.classList.contains("ot")) {
            navbar.classList.replace("ot", "osu");
        }
        if (navbar.classList.contains("os")) {
            navbar.classList.replace("os", "osu");
        }
        navbar.classList.add("osu");
    } else {//down
        if (checkbox.checked) {
            checkbox.checked = false;
        }
        if (navbar.classList.contains("ot")) {
            navbar.classList.replace("ot", "os");
        }
        if (navbar.classList.contains("osu")) {
            navbar.classList.replace("osu", "os");
        }
        navbar.classList.add("os");
    }
    prevScrollpos = currentScrollPos;
}


