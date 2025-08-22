document.addEventListener("DOMContentLoaded", () => {
  // --- Tick xanh ---
  document.querySelectorAll(".sidebar-element").forEach(row => {
    row.addEventListener("click", () => {
      const tick = row.querySelector(".sidebar-tick-element");
      if (tick) tick.classList.toggle("active");
    });
  });

  // --- Thanh range ---
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
    thumb.addEventListener("click", function () {
      if (this.src.includes("img/view-1.png")) {
        mainCarImg.src = defaultImage;
      } else {
        mainCarImg.src = this.src;
      }
    });
  });

  // --- Chuyển về detail web khi nhấn catalog ---
  document.querySelectorAll(".detail-catalog").forEach(item => {
    item.addEventListener("click", () => {
      window.location.href = "detail.html";
    });
  });

  // ------------------ TOGGLE SIDEBAR MOBILE ------------------ //
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.querySelector(".detail-bar-side");

  if (menuToggle && sidebar) {
    // tạo overlay
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    document.body.appendChild(overlay);

    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      overlay.classList.toggle("show");
      document.body.classList.toggle("menu-open");
    });

    // click ra ngoài -> đóng
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("show");
      document.body.classList.remove("menu-open");
    });
  }

  console.log("style.js loaded OK");
});

document.addEventListener("DOMContentLoaded", () => {
  const desc = document.getElementById("desc");

  if (window.innerWidth <= 768) { // chỉ áp dụng mobile
    const maxChars = 60; // số ký tự muốn giữ lại
    if (desc.innerText.length > maxChars) {
      desc.innerText = desc.innerText.substring(0, maxChars) + "...";
    }
  }
});
