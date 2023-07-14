const myCustomSlider = document.querySelectorAll('.swiper-container');

for( i=0; i< myCustomSlider.length; i++ ) {
  
  myCustomSlider[i].classList.add('swiper-container-' + i);

  var slider = new Swiper('.swiper-container-' + i, {
     slidesPerView: 1,
  slidesPerColumn: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetweenSlides: 10
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      spaceBetweenSlides: 20
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetweenSlides: 30
    }
  }
  });

}


