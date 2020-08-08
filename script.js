// Selecting the menu button
const menu = document.querySelector(".hamburger");
menu.addEventListener("click", () => {

    if(document.querySelector(".navs").classList.contains("none")) {
        document.querySelector(".navs").classList.remove("none")
    } else {
        document.querySelector(".navs").classList.add("none")
    }
})

const btn = document.querySelector(".hamburger");
let menuOpen = false;
btn.addEventListener("click", e => {
    if(!menuOpen) {
        document.querySelector(".line").classList.add("open");
        menuOpen = true;
    } else {
        document.querySelector(".line").classList.remove("open");
        menuOpen = false;
    }
})