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
    // On défini une action sur l'événement 'slideChange'
    on: {
        slideChange: function () {
            // On créer un flag (true/false) en vérifiant si la slide actuelle est la dernière en comparant à la taille de la liste des slides (attention la liste commence à 0 et non 1).
            const isLastSlide = this.activeIndex === this.slides.length - 1;
            // On créer un objet JS permettant d'interagir avec la pagination dans le DOM.
            const paginationEl = document.querySelector('.swiper-pagination');

            // On vérifie si on est sur la dernière slide
            if (isLastSlide) {
                // Si oui, on applique le style CSS pour masquer notre pagination.
                paginationEl.style.display = 'none';
            } else {
                // Sinon on affiche la pagination.
                paginationEl.style.display = 'block';
            }
        }
    }
});