document.addEventListener("DOMContentLoaded", function () {
  let prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");

  // 確認 navbar 元素存在，避免錯誤
  if (!navbar) {
    console.error("Navbar element not found.");
    return;
  }

  // 偵測滾動方向，控制 navbar 顯示與隱藏
  window.addEventListener("scroll", function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      // 向上滾動，顯示 navbar
      navbar.style.top = "0";
      navbar.classList.remove("transparent");
    } else {
      // 向下滾動，隱藏 navbar
      navbar.style.top = "-80px";
      navbar.classList.add("transparent");
    }
    prevScrollPos = currentScrollPos;
  });

  // 點擊漢堡按鈕切換手機版選單顯示
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  } else {
    console.error("Hamburger button or nav links not found.");
  }

  // 載入購物車數量顯示
  const cartCountSpan = document.getElementById("cart-count");
  const cartCount = localStorage.getItem("cartCount") || 0;
  if (cartCountSpan) {
    cartCountSpan.textContent = cartCount;
  }
});
