// --------------Hiệu ứng thả tim cho tất cả catalog--------------
document.addEventListener("DOMContentLoaded", () => {
    const hearts = document.querySelectorAll(".heart");

    hearts.forEach(heart => {
        heart.addEventListener("click", () => {
            if (heart.src.includes("heart-red.png")) {
                heart.src = "img/heart.png";   // tim rỗng
            } else {
                heart.src = "img/heart-red.png"; // tim đỏ
            }
        });
    });
});
// ----------------Hiệu ứng tick xanh------------//
document.querySelectorAll(".sidebar-element").forEach(row => {
  row.addEventListener("click", () => {
    row.querySelector(".sidebar-tick-element").classList.toggle("active");
  });
});

const slider = document.getElementById('detail-range');

function updateSlider() {
    const value = slider.value;
    const max = slider.max;
    const percent = (value / max) * 100;
    slider.style.background = `linear-gradient(to right, #3563E9 ${percent}%, #90A3BF ${percent}%)`;
}

slider.addEventListener('input', updateSlider);
updateSlider();

