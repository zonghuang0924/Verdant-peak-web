// 商品資料
let products = [
  { id: 1, name: "商品A", price: 100, description: "這是商品A的描述" },
  { id: 2, name: "商品B", price: 200, description: "這是商品B的描述" },
  { id: 3, name: "商品C", price: 300, description: "這是商品C的描述" }
];

// 儲存購物車內容
let cart = [];

// 顯示商品列表
function displayProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; // 清空商品列表

  products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product-item');
      productDiv.innerHTML = `
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>價格: ${product.price} 元</p>
          <button onclick="addToCart(${product.id})">加入購物車</button>
      `;
      productList.appendChild(productDiv);
  });
}

// 加入購物車的函數
function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  const cartItem = cart.find(item => item.id === productId);

  if (cartItem) {
      cartItem.quantity++; // 若商品已在購物車，數量增加
  } else {
      cart.push({ ...product, quantity: 1 }); // 若商品不在購物車，則加入
  }

  alert(`${product.name} 已加入購物車！`);
}

// 更新購物車的顯示
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = ''; // 清空購物車
  let totalPrice = 0;

  cart.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.quantity}</td>
          <td>${item.price * item.quantity}</td>
      `;
      cartItems.appendChild(row);
      totalPrice += item.price * item.quantity;
  });

  document.getElementById('total-price').textContent = totalPrice;
}

// 在頁面加載時顯示商品（在商品展示頁面）
if (document.getElementById('product-list')) {
  displayProducts();
}

// 在購物車頁面加載時更新購物車顯示
if (document.getElementById('cart-items')) {
  updateCart();
}
