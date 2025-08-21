document.addEventListener("DOMContentLoaded", () => {
  // --- Hiệu ứng thả tim ---
  const hearts = document.querySelectorAll(".heart");
  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      heart.src = heart.src.includes("heart-red.png") ? "img/heart.png" : "img/heart-red.png";
    });
  });

  // --- Tick xanh ---
  document.querySelectorAll(".sidebar-element").forEach(row => {
    row.addEventListener("click", () => {
      const tick = row.querySelector(".sidebar-tick-element");
      if (tick) tick.classList.toggle("active");
    });
  });

  // --- Thanh range (chặn lỗi nếu thiếu) ---
  const slider = document.getElementById("detail-range");
  if (slider) {
    const updateSlider = () => {
      const value = slider.value;
      const max = slider.max || 100;
      const percent = (value / max) * 100;
      slider.style.background = `linear-gradient(to right, #3563E9 ${percent}%, #90A3BF ${percent}%)`;
    };
    slider.addEventListener("input", updateSlider);
    updateSlider();
  }

  // --- Đổi ảnh chính khi click thumbnail ---
  const mainCarImg = document.getElementById("mainCarImg");
  const thumbs = document.querySelectorAll(".thumb");
  const defaultImage = "img/View.png";

  thumbs.forEach(thumb => {
    thumb.addEventListener("click",function() {
        if(this.src.includes("img/view-1.png")) {
            mainCarImg.src = defaultImage;
        }else{
            mainCarImg.src = this.src;
        }
    });
  });

  // Log để chắc chắn file JS đã load
  console.log("style.js loaded OK");
});

// ------------------chuyển về detail web mỗi khi nhấn vào catalog---------------------------//
    document.querySelectorAll(".detail-catalog").forEach(item => {
        item.addEventListener("click", () => {
            window.location.href = "detail.html";
        });
    });


// ------------------ TOGGLE SIDEBAR MOBILE ------------------ //
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.querySelector(".detail-bar-side");

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });
  }
});
