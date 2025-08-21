// ===== Favorite hearts toggle =====
document.querySelectorAll('.heart').forEach(btn => {
  btn.addEventListener('click', () => btn.classList.toggle('active'));
});

// ===== Price slider fill + label =====
const range = document.getElementById('priceRange');
const priceText = document.getElementById('priceText');

function paint() {
  const min = +range.min, max = +range.max, val = +range.value;
  const pct = ((val - min) / (max - min)) * 100;
  range.style.background = `linear-gradient(90deg, var(--primary) ${pct}%, #E2E8F0 ${pct}%)`;
  priceText.textContent = `$${val.toFixed(0)}.00`;
}
range.addEventListener('input', paint);
paint();

// ===== Heart icon đổi ảnh =====
const hearts = document.querySelectorAll(".heart");

hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    if (heart.src.includes("heart.png")) {
      heart.src = "img/heart-red.png"; // đổi sang đỏ
    } else {
      heart.src = "img/heart.png"; // đổi lại bình thường
    }
  });
});
