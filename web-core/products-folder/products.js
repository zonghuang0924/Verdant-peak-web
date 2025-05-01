// products.js
// 確保 DOM 完全載入後再執行
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  if (!productList || !window.products) return;

  // 生成商品卡片
  window.products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.category = product.category;
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">NT$${product.price}</p>
      <button class="add-to-cart" data-id="${product.id}">加入購物車</button>
    `;
    productList.appendChild(card);
  });
});
