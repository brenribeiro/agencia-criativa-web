const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const navLinks= document.querySelectorAll(" .nav__link");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

navLinks.forEach(link => {link.addEventListener("click", () => {
     nav.classList.remove("show");
   });
}); 