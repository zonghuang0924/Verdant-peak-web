// 載入 nav.html 並初始化
fetch('/universal-file/nav.html')
  .then(response => {
    if (!response.ok) throw new Error('導覽列載入失敗');
    return response.text();
  })
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;

    // ✅ 等 DOM 插入完再初始化
    requestAnimationFrame(() => {
      initNavbar();
    });
  })
  .catch(err => console.error(err));

function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");
  const cartCountSpan = document.getElementById("cart-count");

  if (!navbar) {
    console.error("Navbar element not found.");
    return;
  }
  if (!hamburgerBtn || !navLinks) {
    console.error("Hamburger button or nav links not found.");
  }

  // 捲動隱藏/顯示 navbar
  let prevScrollPos = window.pageYOffset;
  const scrollThreshold = 10;

  window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;
    const diff = prevScrollPos - currentScrollPos;

    if (diff > scrollThreshold) {
      navbar.style.top = "0";
      navbar.classList.remove("transparent");
    } else if (diff < -scrollThreshold) {
      navbar.style.top = "-80px";
      navbar.classList.add("transparent");
    }

    prevScrollPos = currentScrollPos;
  });

  // 漢堡按鈕切換選單
  hamburgerBtn?.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // 購物車數量顯示
  const cartCount = localStorage.getItem("cartCount") || 0;
  if (cartCountSpan) {
    cartCountSpan.textContent = cartCount;
  }
}
