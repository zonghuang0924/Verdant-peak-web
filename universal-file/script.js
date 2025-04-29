let prevScrollPos = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener('scroll', function() {
  const currentScrollPos = window.scrollY;
  const threshold = 100;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.offsetHeight;
  const scrollBottom = currentScrollPos + windowHeight;

  if (scrollBottom >= documentHeight - 50) {
    navbar.style.top = "0";
    navbar.classList.add("transparent");
  } else if (currentScrollPos > threshold) {
    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = "0";
      navbar.classList.remove("transparent");
    } else {
      navbar.style.top = "-80px";
    }
  } else {
    navbar.style.top = "0";
    navbar.classList.remove("transparent");
  }

  prevScrollPos = currentScrollPos;
});

const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');

hamburgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
