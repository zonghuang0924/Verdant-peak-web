// cart.js

// 讀取 localStorage 購物車資料
let cart = JSON.parse(localStorage.getItem("cart")) || {};

// 監聽全頁面點擊事件：加入購物車
document.addEventListener("click", function(e) {
  if (e.target && e.target.classList.contains("add-to-cart")) {
    const productId = e.target.getAttribute("data-id");

    // 從 products 找到對應商品（需全域可用）
    const product = (typeof products !== 'undefined') ? products.find(p => p.id === productId) : null;
    if (!product) return;

    if (cart[productId]) {
      cart[productId].quantity += 1;
    } else {
      cart[productId] = { ...product, quantity: 1 };
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  }
});

// 更新購物車數量提示
function updateCartDisplay() {
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  const cartCount = Object.values(cart).reduce((total, product) => total + product.quantity, 0);
  const cartIcon = document.getElementById("cart-icon");

  if (cartIcon) {
    cartIcon.textContent = cartCount;
  }
}

// 載入時更新一次
updateCartDisplay();

const product = (typeof products !== 'undefined') ? products.find(p => p.id === productId) : null;
if (!product) return; // 防止出錯