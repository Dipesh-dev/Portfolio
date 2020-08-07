// Selecting the menu button
const menu = document.querySelector(".menu-btn");
menu.addEventListener("click", () => {

    if(document.querySelector(".navs").classList.contains("none")) {
        document.querySelector(".navs").classList.remove("none")
    } else {
        document.querySelector(".navs").classList.add("none")
    }
})