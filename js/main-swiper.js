var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    effect: "fade",
    fadeEffect: { crossFade: true },
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});