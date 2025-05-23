document.addEventListener("DOMContentLoaded", function() {
  let prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');

  if (!navbar) {
    console.error("Navbar element not found.");
    return;
  }

  window.addEventListener("scroll", function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      // 向上滾動，顯示導覽列
      navbar.style.top = "0";
      navbar.classList.remove("transparent");
    } else {
      // 向下滾動，隱藏導覽列
      navbar.style.top = "-80px";
      navbar.classList.add("transparent");
    }
    prevScrollPos = currentScrollPos;
  });

  // 點擊漢堡按鈕顯示或隱藏選單
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", function() {
      navLinks.classList.toggle("active");
    });
  } else {
    console.error("Hamburger button or nav links not found.");
  }
});

hamburgerBtn.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});