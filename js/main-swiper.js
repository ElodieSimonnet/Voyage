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
            const root = document.querySelector(':root');
            const cherryFlowerIcon = document.getElementById('cherryflower-icon');
            const cultureIcon = document.getElementById('culture-icon');
            const gastronomieIcon = document.getElementById('gastronomie-icon');
            const aventureIcon = document.getElementById('aventure-icon');
            const biodiversiteIcon = document.getElementById('biodiversite-icon');
            const traditionIcon = document.getElementById('tradition-icon');
            const insoliteIcon = document.getElementById('insolite-icon');
            const cherryFlower2Icon = document.getElementById('cherryflower2-icon');


            switch (this.activeIndex) {
                case 1:
                    cherryFlowerIcon.style.display = "none";
                    cultureIcon.style.display = "block";
                    gastronomieIcon.style.display = "none";
                    aventureIcon.style.display = "none";
                    biodiversiteIcon.style.display = "none";
                    traditionIcon.style.display = "none";
                    insoliteIcon.style.display = "none";
                    cherryFlower2Icon.style.display = "none";
                    root.style.setProperty('--before-height', '2vh');
                    root.style.setProperty('--after-top', '14.3vh');
                    root.style.setProperty('--after-height', '41vh');
                    break;
                case 2:
                    cherryFlowerIcon.style.display = "none";
                    cultureIcon.style.display = "none";
                    gastronomieIcon.style.display = "block";
                    aventureIcon.style.display = "none";
                    biodiversiteIcon.style.display = "none";
                    traditionIcon.style.display = "none";
                    insoliteIcon.style.display = "none";
                    cherryFlower2Icon.style.display = "none";
                    root.style.setProperty('--before-height', '9vh');
                    root.style.setProperty('--after-top', '21.5vh');
                    root.style.setProperty('--after-height', '34vh');
                    break;
                case 3:
                    cherryFlowerIcon.style.display = "none";
                    cultureIcon.style.display = "none";
                    gastronomieIcon.style.display = "none";
                    aventureIcon.style.display = "block";
                    biodiversiteIcon.style.display = "none";
                    traditionIcon.style.display = "none";
                    insoliteIcon.style.display = "none";
                    cherryFlower2Icon.style.display = "none";
                    root.style.setProperty('--before-height', '15vh');
                    root.style.setProperty('--after-top', '27.3vh');
                    root.style.setProperty('--after-height', '28vh');
                    break;
                case 4:
                    cherryFlowerIcon.style.display = "none";
                    cultureIcon.style.display = "none";
                    gastronomieIcon.style.display = "none";
                    aventureIcon.style.display = "none";
                    biodiversiteIcon.style.display = "block";
                    traditionIcon.style.display = "none";
                    insoliteIcon.style.display = "none";
                    cherryFlower2Icon.style.display = "none";
                    root.style.setProperty('--before-height', '21vh');
                    root.style.setProperty('--after-top', '33.3vh');
                    root.style.setProperty('--after-height', '22vh');
                    break;
                case 5:
                    cherryFlowerIcon.style.display = "none";
                    cultureIcon.style.display = "none";
                    gastronomieIcon.style.display = "none";
                    aventureIcon.style.display = "none";
                    biodiversiteIcon.style.display = "none";
                    traditionIcon.style.display = "block";
                    insoliteIcon.style.display = "none";
                    cherryFlower2Icon.style.display = "none";
                    root.style.setProperty('--before-height', '27vh');
                    root.style.setProperty('--after-top', '39.3vh');
                    root.style.setProperty('--after-height', '16vh');
                    break;
                case 6:
                    cherryFlowerIcon.style.display = "none";
                    cultureIcon.style.display = "none";
                    gastronomieIcon.style.display = "none";
                    aventureIcon.style.display = "none";
                    biodiversiteIcon.style.display = "none";
                    traditionIcon.style.display = "none";
                    insoliteIcon.style.display = "block";
                    cherryFlower2Icon.style.display = "none";
                    root.style.setProperty('--before-height', '33.1vh');
                    root.style.setProperty('--after-top', '45.3vh');
                    root.style.setProperty('--after-height', '10vh');
                    break;
                case 7:
                    cherryFlowerIcon.style.display = "none";
                    cultureIcon.style.display = "none";
                    gastronomieIcon.style.display = "none";
                    aventureIcon.style.display = "none";
                    biodiversiteIcon.style.display = "none";
                    traditionIcon.style.display = "none";
                    insoliteIcon.style.display = "none";
                    cherryFlower2Icon.style.display = "block";
                    root.style.setProperty('--before-height', '39vh');
                    root.style.setProperty('--after-top', '51.3vh');
                    root.style.setProperty('--after-height', '4vh');
                    break;
                case 8:
                    cherryFlowerIcon.style.display = "none";
                    cultureIcon.style.display = "none";
                    gastronomieIcon.style.display = "none";
                    aventureIcon.style.display = "none";
                    biodiversiteIcon.style.display = "none";
                    traditionIcon.style.display = "none";
                    insoliteIcon.style.display = "none";
                    cherryFlower2Icon.style.display = "none";
                    break;
                default :
                    cherryFlowerIcon.style.display = "block";
                    cultureIcon.style.display = "none";
                    gastronomieIcon.style.display = "none";
                    aventureIcon.style.display = "none";
                    biodiversiteIcon.style.display = "none";
                    traditionIcon.style.display = "none";
                    insoliteIcon.style.display = "none";
                    cherryFlower2Icon.style.display = "none";
                    root.style.setProperty('--before-height', '0vh');
                    root.style.setProperty('--after-top', '8.9vh');
                    root.style.setProperty('--after-height', '47vh');
            }

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