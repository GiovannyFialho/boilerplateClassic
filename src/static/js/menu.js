document.getElementById("menu-hamburguer").addEventListener("click", (event) => {
    if (event.target.checked == true) {
        document.querySelector(".menu-container-items").classList.add("open");
        event.target.checked = false;
    }
});

document.getElementById("close-menu-hamburguer").addEventListener("click", (event) => {
    if (event.target.checked == false) {
        document.querySelector(".menu-container-items").classList.remove("open");
        event.target.checked = true;
    }
});
