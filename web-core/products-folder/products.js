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
