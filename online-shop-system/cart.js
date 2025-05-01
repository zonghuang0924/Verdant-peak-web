// cart.js
document.addEventListener("DOMContentLoaded", () => {
  // 讀 localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || {};

  // 更新右上角購物車數字
  function updateCartCount() {
    const cartCountElem = document.getElementById("cart-count");
    if (!cartCountElem) return;
    const total = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    cartCountElem.textContent = total;
  }

  // 處理加入購物車
  document.body.addEventListener("click", e => {
    const btn = e.target.closest(".add-to-cart");
    if (!btn) return;
    const id = btn.dataset.id;
    const product = window.products && window.products.find(p => p.id === id);
    if (!product) return;

    // 寫入 cart
    if (cart[id]) cart[id].quantity++;
    else           cart[id] = { ...product, quantity: 1 };

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  });

  // 載入時先顯示一次
  updateCartCount();
});
