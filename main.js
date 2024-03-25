const navlinks = document.querySelectorAll("header nav .link");

navlinks.forEach((element) => {
  element.addEventListener("click", () => {
    navlinks.forEach((element2) => {
      element2.classList.remove("active");
    });
    element.classList.add("active");
  });
});

const burger = document.querySelector("#menu-btn");
const burgerlinks = document.querySelector("header .nav_links");

burger.addEventListener("click", () => {
  burgerlinks.classList.toggle("active");
});
