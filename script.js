var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  swiper.on("click", function (e) {
    e.clickedSlide.style.width = "450px";

    swiper.update();
  });