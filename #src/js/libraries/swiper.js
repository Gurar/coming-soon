
let slider = document.querySelector('.swiper-container');

var mySwiper = new Swiper(slider, {

 

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  grabCursor: true,

  loop: true
})