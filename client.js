// Hamburger toggle
const bars = document.getElementById("bars");
function hamburgerToggle() {
  const navLinks = document.getElementById("nav-links");

  if (navLinks.style.display === "") {
    navLinks.style.display = "block"
  } else {
    navLinks.style.display = ""
  }


}
bars.addEventListener("click", hamburgerToggle);

// Nav Scroll
const about = document.getElementById("about-link");
const tours = document.getElementById("tours-link");
const articles = document.getElementById("articles-link");

about.onclick = () => gsap.to(window, { duration: 1.5, ease: "power4", scrollTo: { y: "#about-us", offsetY: 90 } })
tours.onclick = () => gsap.to(window, { duration: 1.5, ease: "power4", scrollTo: { y: "#group-tours", offsetY: 90 } })
articles.onclick = () => gsap.to(window, { duration: 1.5, ease: "power4", scrollTo: { y: "#articles", offsetY: 90 } })
