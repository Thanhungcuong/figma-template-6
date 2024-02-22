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




