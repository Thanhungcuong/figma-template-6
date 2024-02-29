var swiper = new Swiper(".slide1", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      // Cấu hình cho màn hình có độ rộng 768 pixel trở lên
      1280: {
        slidesPerView: 5, // Số lượng slide hiển thị khi màn hình có độ rộng từ 768 pixel trở lên
        spaceBetween: 30, // Khoảng cách giữa các slide
      },
      // Cấu hình cho màn hình có độ rộng 576 pixel trở lên
      576: {
        slidesPerView: 3, // Số lượng slide hiển thị khi màn hình có độ rộng từ 576 pixel trở lên
        spaceBetween: 20, // Khoảng cách giữa các slide
      },
      // Cấu hình cho màn hình có độ rộng ít hơn 576 pixel
      0: {
        slidesPerView: 1, // Chỉ hiển thị 1 slide khi màn hình có độ rộng ít hơn 576 pixel
        spaceBetween: 5, // Khoảng cách giữa các slide
      }
    }
  });

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".slide3", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");
  const img4 = document.getElementById("img4");
  const img5 = document.getElementById("img5");
  const img6 = document.getElementById("img6");
  const mainImage = document.getElementById("main-image");
  mainImage.src=img2.src;
  img2.classList.add("border-4", "border-green-500", "rounded-full")

  /* thay đổi mainImage khi bấm vào ảnh nhỏ bên ngoài */
  img1.addEventListener("click", () => {
    mainImage.src = img1.src;
  });
  
  img2.addEventListener("click", () => {
    mainImage.src = img2.src;
  });
  
  img3.addEventListener("click", () => {
    mainImage.src = img3.src;
  });

  img4.addEventListener("click", () => {
    mainImage.src = img4.src;
  });
  
  img5.addEventListener("click", () => {
    mainImage.src = img5.src;
  });

  img6.addEventListener("click", () => {
    mainImage.src = img6.src;
  });


/* Hiển thị viền khi click */
// Biến lưu trữ trạng thái viền của từng ảnh
const isBordered = [];

// Khởi tạo mảng isBordered với 6 giá trị false (mặc định không có viền)
for (let i = 0; i < 6; i++) {
  isBordered.push(false);
}

function removeBorderClasses() {
  for (let i = 1; i <= 6; i++) {
    const img = document.getElementById(`img${i}`);
    img.classList.remove("border-4", "border-green-500", "rounded-full");
  }
}

// Thêm sự kiện click cho 6 ảnh
  for (let i = 1; i <= 6; i++) {
  const img = document.getElementById(`img${i}`);

  img.addEventListener("click", (e) => {
    e.preventDefault()
    removeBorderClasses();

    const currentImageIndex = i - 1; // Lấy index của ảnh trong mảng isBordered

    isBordered[currentImageIndex] = !isBordered[currentImageIndex];

    if (isBordered[currentImageIndex]) {
      img.classList.add("border-4", "border-green-500", "rounded-full");
    } 
  });
}

const btnXemThemList = document.querySelectorAll(".btn-xem-them");
const chiTietGoiList = document.querySelectorAll(".chi-tiet-goi");

btnXemThemList.forEach((btnXemThem, index) => {
  btnXemThem.addEventListener("click", () => {
    btnXemThem.classList.toggle("active");
    chiTietGoiList[index].classList.toggle("hidden");

    if (btnXemThem.classList.contains("active")) {
      btnXemThem.querySelector("img").src = "img/minus-circle.png";
    } else {
      btnXemThem.querySelector("img").src = "img/plus-circle.png";
    }
  });
});

const countdownDate = new Date(2024, 2, 28, 13, 11, 16); // Thay đổi ngày giờ đếm ngược

const updateCountdown = () => {
  const now = new Date();
  const difference = countdownDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.querySelector('.days').textContent = days;
  document.querySelector('.hours').textContent = hours;
  document.querySelector('.minutes').textContent = minutes;
  document.querySelector('.seconds').textContent = seconds;

  if (difference <= 0) {
    clearInterval(interval);
  }
};

const interval = setInterval(updateCountdown, 1000);

updateCountdown();







