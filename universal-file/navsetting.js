let prevScrollPos = window.scrollY; // 用scrollY取代pageYOffset

window.addEventListener('scroll', function() {
    const currentScrollPos = window.scrollY;
    const navbar = document.getElementById("navbar");

    if (prevScrollPos > currentScrollPos) {
        // 滾上去 → 顯示
        navbar.style.top = "0";
    } else {
        // 滾下來 → 隱藏
        navbar.style.top = "-80px";
    }

    prevScrollPos = currentScrollPos;
});