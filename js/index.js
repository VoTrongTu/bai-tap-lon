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
            window.location.href = "payment.html"; // điều hướng riêng
        });
    });

    document.querySelectorAll(".Button-Rent-Ads1").forEach(btn=> {
        btn.addEventListener("click", (event) =>{
            event.preventDefault();
            event.stopPropagation();
            window.location.href = "detail.html";
        });
    });

    document.querySelectorAll(".Button-Rent-Ads2").forEach(btn=> {
        btn.addEventListener("click", (event) =>{
            event.preventDefault();
            event.stopPropagation();
            window.location.href = "detail.html";
        });
    });
});
