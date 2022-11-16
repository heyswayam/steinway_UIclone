const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
 hamburger.addEventListener("click", () =>{
     navMenu.classList.toggle("hidden");
})
document.querySelector(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("hidden");  
    navMenu.classList.remove("hidden");
}))
