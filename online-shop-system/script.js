// 設定商品數量、價格和其他邏輯
let cart = [
  { name: "商品A", price: 100, quantity: 1 },
  { name: "商品B", price: 200, quantity: 2 }
];

// 更新購物車頁面
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = ''; // 清空清單
  let totalPrice = 0;

  cart.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${cart.indexOf(item)}, this.value)"></td>
          <td>${item.price * item.quantity}</td>
          <td><button onclick="removeItem(${cart.indexOf(item)})">刪除</button></td>
      `;
      cartItems.appendChild(row);
      totalPrice += item.price * item.quantity;
  });

  document.getElementById('total-price').textContent = totalPrice;
}

// 更新商品數量
function updateQuantity(index, quantity) {
  cart[index].quantity = parseInt(quantity);
  updateCart();
}

// 刪除商品
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// 頁面載入後初始化購物車
if (document.getElementById('cart-items')) {
  updateCart();
}

// 處理結帳頁面表單
if (document.getElementById('checkout-form')) {
  document.getElementById('checkout-form').addEventListener('submit', function(event) {
      event.preventDefault();
      window.location.href = 'order_complete.html';
  });
}
