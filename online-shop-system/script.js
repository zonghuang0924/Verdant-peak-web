// 定義商品資料
let products = [
  { id: 1, name: "商品A", price: 100, description: "這是商品A的描述", quantity: 0 },
  { id: 2, name: "商品B", price: 200, description: "這是商品B的描述", quantity: 0 },
  { id: 3, name: "商品C", price: 300, description: "這是商品C的描述", quantity: 0 }
];

// 儲存購物車內容
let cart = [];

// 更新商品顯示
function displayProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

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

// 加入購物車
function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  const cartItem = cart.find(item => item.id === productId);

  if (cartItem) {
      cartItem.quantity++;
  } else {
      cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

// 更新購物車
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = ''; // 清空購物車
  let totalPrice = 0;

  cart.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)"></td>
          <td>${item.price * item.quantity}</td>
          <td><button onclick="removeItem(${item.id})">刪除</button></td>
      `;
      cartItems.appendChild(row);
      totalPrice += item.price * item.quantity;
  });

  document.getElementById('total-price').textContent = totalPrice;
}

// 更新商品數量
function updateQuantity(productId, quantity) {
  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
      cartItem.quantity = parseInt(quantity);
      updateCart();
  }
}

// 刪除商品
function removeItem(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

// 初始化商品展示頁
if (document.getElementById('product-list')) {
  displayProducts();
}

// 初始化購物車頁面
if (document.getElementById('cart-items')) {
  updateCart();
}