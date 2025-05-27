document.addEventListener("DOMContentLoaded", function () {
  let prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");

  // 防呆：確認 navbar 存在
  if (!navbar) {
    console.error("Navbar element not found.");
    return;
  }

  // 滾動時顯示或隱藏導覽列
  window.addEventListener("scroll", function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = "0";
      navbar.classList.remove("transparent");
    } else {
      navbar.style.top = "-80px";
      navbar.classList.add("transparent");
    }
    prevScrollPos = currentScrollPos;
  });

  // 點擊漢堡按鈕切換選單
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  } else {
    console.error("Hamburger button or nav links not found.");
  }

  // 載入購物車數量
  const cartCountSpan = document.getElementById("cart-count");
  const cartCount = localStorage.getItem("cartCount") || 0;
  if (cartCountSpan) {
    cartCountSpan.textContent = cartCount;
  }
});
