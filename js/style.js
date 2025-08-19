// --------------Hiệu ứng thả tim--------------
document.addEventListener("DOMContentLoaded", () => {
    const heart = document.querySelector(".heart-Catalog1"); // lấy theo class

    heart.addEventListener("click", () => {
        if (heart.src.includes("heart-red.png")) {
            heart.src = "img/heart.png";   // tim rỗng
        } else {
            heart.src = "img/heart-red.png"; // tim đỏ
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const heart = document.querySelector(".heart-Catalog2"); // lấy theo class

    heart.addEventListener("click", () => {
        if (heart.src.includes("heart-red.png")) {
            heart.src = "img/heart.png";   // tim rỗng
        } else {
            heart.src = "img/heart-red.png"; // tim đỏ
        }
    });
});