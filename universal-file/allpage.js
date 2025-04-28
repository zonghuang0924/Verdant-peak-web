// 自動載入 navbar 和 footer
document.addEventListener("DOMContentLoaded", function() {
  fetch('../../universal-file/nav.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('navbar').innerHTML = data;
      });

  fetch('../../universal-file/footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footer').innerHTML = data;
      });
});
