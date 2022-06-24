//change navbar styles on scroll

window.addEventListener("scroll", () => {
  documnet
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});
