
let linkBtn = document.querySelector(".navbar__link--callback");
let popUp = document.querySelector('.popup');
let overlay = document.querySelector('.overlay');
let popUpCloseBtn = popUp.querySelector('.popup__close');
let menuOpenButton = document.querySelector('.header__menubutton');
let navBar = document.querySelector('.navbar');

linkBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popUp.classList.add('show');
  overlay.classList.add('overlay--show');

  popUpCloseBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    popUp.classList.remove('show');
    overlay.classList.remove("overlay--show");
  })
})

menuOpenButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  navBar.classList.toggle("navbar--show");
})

var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true
});
