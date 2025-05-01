// products.js

// 假設 products 是從 productData.js 引入的

// 獲取商品展示區域
const productList = document.getElementById("product-list");

// 動態生成商品卡片
products.forEach(product => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productCard.setAttribute("data-category", product.category);

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p class="price">NT$${product.price}</p>
    <button class="add-to-cart" data-id="${product.id}">加入購物車</button>
  `;

  productList.appendChild(productCard);
});

// 讀取購物車資料
let cart = JSON.parse(localStorage.getItem("cart")) || {};

// 處理加入購物車按鈕點擊事件
document.addEventListener("click", function(e) {
  if (e.target && e.target.classList.contains("add-to-cart")) {
    const productId = e.target.getAttribute("data-id");

    if (cart[productId]) {
      cart[productId].quantity += 1;
    } else {
      const product = products.find(p => p.id === productId);
      cart[productId] = { ...product, quantity: 1 };
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  }
});

// 更新購物車顯示
function updateCartDisplay() {
  const cartCount = Object.values(cart).reduce((total, product) => total + product.quantity, 0);
  const cartIcon = document.getElementById("cart-icon");

  if (cartIcon) {
    cartIcon.textContent = cartCount;
  }
}

updateCartDisplay();
