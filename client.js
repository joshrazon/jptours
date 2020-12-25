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