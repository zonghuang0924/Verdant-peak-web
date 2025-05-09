window.addEventListener('DOMContentLoaded', () => {
  const lines = document.querySelectorAll('.poem-line');
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('show');
    }, index * 300); // 每行間隔0.3秒淡入
  });
});
