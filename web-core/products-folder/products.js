// 產品資料庫（商品列表）
const products = [
  {
    id: "original-drink",
    name: "原味植萃飲",
    category: "classic",
    description: "成分：天然草本精華、純水<br>保存：冷藏｜規格：350ml",
    price: 65,
    image: "images/original1.jpg"
  },
  {
    id: "rose-tea",
    name: "玫瑰花茶",
    category: "rose",
    description: "成分：玫瑰、蜂蜜、純水<br>保存：冷藏｜規格：350ml",
    price: 75,
    image: "images/rose1.jpg"
  },
  {
    id: "blue-drink",
    name: "藍玫瑰沁涼飲",
    category: "blue",
    description: "成分：藍玫瑰萃取、檸檬<br>保存：冷藏｜規格：350ml",
    price: 85,
    image: "images/blue1.jpg"
  },
  {
    id: "summer-drink",
    name: "夏日限定水果飲",
    category: "limited",
    description: "成分：綜合水果、薄荷氣泡水<br>保存：冷藏｜規格：500ml",
    price: 95,
    image: "images/limited1.jpg"
  }
];

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

    // 加入商品到購物車
    if (cart[productId]) {
      cart[productId].quantity += 1;
    } else {
      const product = products.find(p => p.id === productId);
      cart[productId] = { ...product, quantity: 1 };
    }

    // 儲存購物車到 localStorage
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

// 頁面載入時更新購物車顯示
updateCartDisplay();
