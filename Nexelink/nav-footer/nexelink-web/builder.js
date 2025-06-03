// builder.js

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const selectedList = document.getElementById("selected-list");
const totalPriceSpan = document.getElementById("total-price");

function updateSelection() {
  selectedList.innerHTML = "";
  let total = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) {
      const name = cb.dataset.name;
      const price = parseInt(cb.dataset.price);
      total += price;
      const li = document.createElement("li");
      li.textContent = `${name} - $${price}`;
      selectedList.appendChild(li);
    }
  });
  totalPriceSpan.textContent = total;
}

checkboxes.forEach(cb => cb.addEventListener("change", updateSelection));

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

// PDF 下載功能
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Nexelink 網站選配報價單", 20, 20);

  let y = 35;
  let total = 0;

  checkboxes.forEach(cb => {
    if (cb.checked) {
      const name = cb.dataset.name;
      const price = parseInt(cb.dataset.price);
      doc.text(`${name} - $${price}`, 20, y);
      y += 10;
      total += price;
    }
  });

  doc.text(`總金額：$${total} 元`, 20, y + 10);
  doc.save("Nexelink_報價單.pdf");
}