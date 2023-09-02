const menuDiv = document.querySelector(".menu")
const sideBar = document.querySelector(".sidebar")

menuDiv.addEventListener("click", () => {
    menuDiv.classList.toggle("active")
    sideBar.classList.toggle("show")
    
})