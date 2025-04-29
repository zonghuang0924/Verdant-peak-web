let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // 使用者往上滾 → 顯示 navbar
    navbar.style.top = "0";
  } else {
    // 使用者往下滾 → 隱藏 navbar
    navbar.style.top = "-80px";
  }

  prevScrollPos = currentScrollPos;
});
