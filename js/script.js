const burgerBtn = document.querySelector('.header__burger-button');
const burgerPic = document.querySelector('.burger-pic');
const overlay = document.querySelector('.overlay');

burgerBtn.addEventListener('click', () => {
    overlay.classList.toggle('overlay_open');
    burgerPic.classList.toggle('burger-pic_cross');
})
