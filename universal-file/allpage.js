document.addEventListener("DOMContentLoaded", function() {
    fetch('/universal-file/nav.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar').innerHTML = data;
      })
      .catch(err => console.error('Navbar loading failed:', err));
  
    fetch('/universal-file/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      })
      .catch(err => console.error('Footer loading failed:', err));
  });
  