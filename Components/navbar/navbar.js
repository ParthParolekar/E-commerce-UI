const hamburgerBtn = document.querySelector("#hamburger");
const navLinks = document.querySelector(".nav-links");

console.log(navLinks);

hamburgerBtn.addEventListener("click", () => {
  if (navLinks.classList.contains("nav-links-not-visible") === true) {
    navLinks.classList.remove("nav-links-not-visible");
    navLinks.classList.add("nav-links-visible");
  } else if (navLinks.classList.contains("nav-links-visible") === true) {
    navLinks.classList.remove("nav-links-visible");
    navLinks.classList.add("nav-links-not-visible");
  }
});
