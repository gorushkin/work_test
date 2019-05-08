
let linkBtn = document.querySelector(".navbar__link--callback");
let popUp = document.querySelector('.popup');
let overlay = document.querySelector('.overlay');
let popUpCloseBtn = popUp.querySelector('.popup__close');

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


