<<<<<<< HEAD
// --------------Hiệu ừng tahr tim--------------
document.addEventListener("DOMContentLoaded", () => {
    const heart = document.querySelector(".heart"); // lấy theo class

    heart.addEventListener("click", () => {
        if (heart.src.includes("heart-red.png")) {
            heart.src = "img/heart.png";   // tim rỗng
        } else {
            heart.src = "img/heart-red.png"; // tim đỏ
        }
    });
});
=======
// --------------Hiệu ừng tahr tim--------------
document.addEventListener("DOMContentLoaded", () => {
    const heart = document.querySelector(".heart"); // lấy theo class

    heart.addEventListener("click", () => {
        if (heart.src.includes("heart-red.png")) {
            heart.src = "img/heart.png";   // tim rỗng
        } else {
            heart.src = "img/heart-red.png"; // tim đỏ
        }
    });
});
>>>>>>> cf88349802c869466de3f67475e71c1389fd74be
