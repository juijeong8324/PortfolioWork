const toggleBtn = document.querySelector(".navbar__toggle");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active"); // active 상태로 만들어줘라!
  icons.classList.toggle("active"); // active 상태로 만들어줘라!
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("header");
  const scrolled = window.scrollY > 50; // Adjust the scroll threshold as needed

  if (scrolled) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
