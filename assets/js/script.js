const btnopensidebar = document.querySelector(".open-btn");
const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".cross");

btnopensidebar.addEventListener("click", function () {
    sidebar.classList.toggle("show");
})
cross.addEventListener("click", function () {
    sidebar.classList.remove("show")
})
