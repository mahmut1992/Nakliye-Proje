const faBars = document.getElementById("fa-bars");
const navBar = document.querySelector(".navbar");
faBars.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
