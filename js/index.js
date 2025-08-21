// Hiệu ứng thả tim
document.addEventListener("DOMContentLoaded", () => {
    const hearts = document.querySelectorAll(".heart");

    hearts.forEach(heart => {
        heart.addEventListener("click", (event) => {
            event.preventDefault();   // chặn link mặc định
            event.stopPropagation();  // chặn lan ra ngoài card

            // đổi icon tim
            if (heart.src.includes("heart-red.png")) {
                heart.src = "img/heart.png";   // tim rỗng
            } else {
                heart.src = "img/heart-red.png"; // tim đỏ
            }

            console.log("Đã nhấn trái tim ❤️");
        });
    });

    // Điều hướng nút Rental
    document.querySelectorAll(".background-Button-Rental").forEach(btn => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();      // chặn link mặc định
            event.stopPropagation();     // chặn nổi bọt
            window.location.href = "detail.html"; // điều hướng riêng
        });
    });
});
