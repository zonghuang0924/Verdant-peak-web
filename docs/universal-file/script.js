// --- 控制滾動時顯示/隱藏 navbar ---
let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-80px";
  }

  prevScrollPos = currentScrollPos;
});

// --- DOM 完成後執行 ---
window.addEventListener("DOMContentLoaded", () => {
  // 設定購物車數量
  const cartCountSpan = document.getElementById("cart-count");
  const cartCount = localStorage.getItem("cartCount") || 0;
  if (cartCountSpan) {
    cartCountSpan.textContent = cartCount;
  }

  // --- 漢堡選單功能 ---
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");

  // 如你要加上遮罩
  let navOverlay = document.getElementById("nav-overlay");

  if (!navOverlay) {
    navOverlay = document.createElement("div");
    navOverlay.id = "nav-overlay";
    navOverlay.style.cssText = `
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.3);
      z-index: 998;
    `;
    document.body.appendChild(navOverlay);
  }

  // 點擊漢堡按鈕 → 開關選單
  hamburgerBtn.addEventListener("click", () => {
    const isActive = navLinks.classList.toggle("active");
    navOverlay.style.display = isActive ? "block" : "none";
  });

  // 點擊遮罩 → 關閉選單
  navOverlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    navOverlay.style.display = "none";
  });
});
