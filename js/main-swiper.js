/**
 * Initialisation du slide horizontal et ces paramètres.
 * **/

let swiper = new Swiper(".mySwiper", {
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
    /**
     * On créer une méthode qui sera executée à chaque changement de slide de notre slider.
     * **/
    on: {
        slideChange: function () {
            /** Création d'un objet JS faisant référence à la racine du document. **/
            const root = document.querySelector(':root');
            /**
             * Création d'un ensemble d'objets JS, un pour chaque images dans la pagination, pour permettre ensuite de les manipuler.
             **/
            const cherryFlowerIcon = document.getElementById('cherryflower-icon');
            const cultureIcon = document.getElementById('culture-icon');
            const gastronomieIcon = document.getElementById('gastronomie-icon');
            const aventureIcon = document.getElementById('aventure-icon');
            const biodiversiteIcon = document.getElementById('biodiversite-icon');
            const traditionIcon = document.getElementById('tradition-icon');
            const insoliteIcon = document.getElementById('insolite-icon');
            const cherryFlower2Icon = document.getElementById('cherryflower2-icon');

            /** Ensuite, détermine quelle est la slide active, et en fonction de celle-ci on effectue certaines actions :
             * 1 - On masque toutes les icones de la pagination sauf celle qui correspond à notre slide.
             * 2 - On re-définis la taille que devra avoir le pseudo-élément :before de la pagination.
             * 3 - On re-définis la position de départ & la taille que devra avoir le pseudo élément :after de la pagination.
             * **/
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
                    root.style.setProperty('--before-height', '3vh');
                    root.style.setProperty('--after-top', '15.3vh');
                    root.style.setProperty('--after-height', '44vh');
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
                    root.style.setProperty('--before-height', '10vh');
                    root.style.setProperty('--after-top', '22.1vh');
                    root.style.setProperty('--after-height', '38vh');
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
                    root.style.setProperty('--before-height', '17vh');
                    root.style.setProperty('--after-top', '29vh');
                    root.style.setProperty('--after-height', '31vh');
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
                    root.style.setProperty('--before-height', '23.6vh');
                    root.style.setProperty('--after-top', '35.8vh');
                    root.style.setProperty('--after-height', '24vh');
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
                    root.style.setProperty('--before-height', '30vh');
                    root.style.setProperty('--after-top', '42.2vh');
                    root.style.setProperty('--after-height', '17vh');
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
                    root.style.setProperty('--before-height', '36.5vh');
                    root.style.setProperty('--after-top', '48.5vh');
                    root.style.setProperty('--after-height', '11vh');
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
                    root.style.setProperty('--before-height', '43.4vh');
                    root.style.setProperty('--after-top', '55.5vh');
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
                    root.style.setProperty('--after-top', '8.8vh');
                    root.style.setProperty('--after-height', '51vh');
            }

            /**
             * On créer un flag (true/false) en vérifiant si la slide actuelle est la dernière en la comparant
             * à la taille de la liste des slides (attention la liste commence à 0 et non 1).
             *
             * On créer également un objet JS permettant d'interagir avec la pagination dans le DOM.
             **/
            let isLastSlide = this.activeIndex === this.slides.length - 1;
            let  paginationEl = document.querySelector('.swiper-pagination');

            /**
             * On vérifie ensuite si l'on est sur la dernière slide :
             *  1 - Si c'est le cas, on applique le style CSS pour masquer notre pagination.
             *  2 - Sinon, on affiche la pagination.
             **/
            if (isLastSlide) {
                paginationEl.style.display = 'none';
            } else {
                paginationEl.style.display = 'block';
            }
        }
    }
});