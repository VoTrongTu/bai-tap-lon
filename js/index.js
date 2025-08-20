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
