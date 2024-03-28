const btnopensidebar = document.querySelector(".open-btn");
const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".cross");
const bglayer = document.querySelector(".bglayer");

btnopensidebar.addEventListener("click", function () {
    sidebar.classList.add("show");
    bglayer.classList.add("d-block");
})
cross.addEventListener("click", function () {
    sidebar.classList.remove("show");
    bglayer.classList.remove("d-block");
})

