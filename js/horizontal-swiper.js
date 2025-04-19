/**
 * Initialisation du slide horizontal et ces paramètres.
 * **/

let myHorizontalSwiper = new Swiper('.myHorizontalSwiper', {
    slidesPerView: '4',
    spaceBetween: 20,
    navigation: {
        nextEl: '.horizontal-button-next',
        prevEl: '.horizontal-button-prev',
    },
});