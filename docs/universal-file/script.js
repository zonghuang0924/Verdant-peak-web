document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");
  const cartCountSpan = document.getElementById("cart-count");

  // === 防呆檢查 ===
  if (!navbar) {
    console.error("Navbar element not found.");
    return;
  }
  if (!hamburgerBtn || !navLinks) {
    console.error("Hamburger button or nav links not found.");
  }

  // === 導覽列滾動隱藏/顯示 ===
  let prevScrollPos = window.pageYOffset;
  const scrollThreshold = 10; // 差值閾值，避免小幅滾動誤判

  window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;
    const diff = prevScrollPos - currentScrollPos;

    if (diff > scrollThreshold) {
      // 向上滾動
      navbar.style.top = "0";
      navbar.classList.remove("transparent");
    } else if (diff < -scrollThreshold) {
      // 向下滾動
      navbar.style.top = "-80px";
      navbar.classList.add("transparent");
    }

    prevScrollPos = currentScrollPos;
  });

  // === 漢堡按鈕切換選單 ===
  hamburgerBtn?.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // === 顯示購物車數量 ===
  const cartCount = localStorage.getItem("cartCount") || 0;
  if (cartCountSpan) {
    cartCountSpan.textContent = cartCount;
  }
});
