var swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  direction: getDirection(),
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}

var swipers = new Swiper(".mySwiper", {
  spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: 3,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

var swips = new Swiper(".mySwip", {
  spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: 3,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    navigation: {
    nextEl: ".swp-button-next",
    prevEl: ".swp-button-prev",
  },
});

var swiperts = new Swiper(".mySwips", {
  spaceBetween: 30,
    slidesPerView: 2,
    slidesPerGroup: 2,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});