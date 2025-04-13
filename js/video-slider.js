/** On créer des objets JS pour chaque vidéo**/

const slideHokkaido = document.getElementById('slide-hokkaido');
const slideTohoku = document.getElementById('slide-tohoku');
const slideKanto = document.getElementById('slide-kanto');
const slideKyushu = document.getElementById('slide-kyushu');
const slideKansai = document.getElementById('slide-kansai');
const slideShugoku = document.getElementById('slide-shugoku');
const slideShikoku = document.getElementById('slide-shikoku');
const slideChubu = document.getElementById('slide-chubu');
const slideOkinawa = document.getElementById('slide-okinawa');


/** On créer des objets JS pour chaque slide **/

const videoHokkaido = document.getElementById('video-hokkaido');
const videoTohoku = document.getElementById('video-tohoku');
const videoKanto = document.getElementById('video-kanto');
const videoKyushu = document.getElementById('video-kyushu');
const videoKansai = document.getElementById('video-kansai');
const videoShugoku = document.getElementById('video-shugoku');
const videoShikoku = document.getElementById('video-shikoku');
const videoChubu = document.getElementById('video-chubu');
const videoOkinawa = document.getElementById('video-okinawa');

/** On gère le lancement de la vidéo d'Hokkaido lors du survol de sa slide. **/
slideHokkaido.addEventListener('mouseenter', function() {
    videoHokkaido.play();
});
/** On gère la mise en pause de la vidéo d'Hokkaido lors de la sortie de sa slide. **/
slideHokkaido.addEventListener('mouseleave', function() {
    videoHokkaido.pause();
});


/** On gère le lancement de la vidéo de Tohoku lors du survol de sa slide. **/
slideTohoku.addEventListener('mouseenter', function() {
    videoTohoku.play();
});
/** On gère la mise en pause de la vidéo de Tohoku lors de la sortie de sa slide. **/
slideTohoku.addEventListener('mouseleave', function() {
    videoTohoku.pause();
});


/** On gère le lancement de la vidéo de Kanto lors du survol de sa slide. **/
slideKanto.addEventListener('mouseenter', function() {
    videoKanto.play();
});
/** On gère la mise en pause de la vidéo de Kanto lors de la sortie de sa slide. **/
slideKanto.addEventListener('mouseleave', function() {
    videoKanto.pause();
});


/** On gère le lancement de la vidéo de Kyushu lors du survol de sa slide. **/
slideKyushu.addEventListener('mouseenter', function() {
    videoKyushu.play();
});
/** On gère la mise en pause de la vidéo de Kyushu lors de la sortie de sa slide. **/
slideKyushu.addEventListener('mouseleave', function() {
    videoKyushu.pause();
});

/** On gère le lancement de la vidéo de Kansai lors du survol de sa slide. **/
slideKansai.addEventListener('mouseenter', function() {
    videoKansai.play();
});
/** On gère la mise en pause de la vidéo de Kansai lors de la sortie de sa slide. **/
slideKansai.addEventListener('mouseleave', function() {
    videoKansai.pause();
});


/** On gère le lancement de la vidéo de Shugoku lors du survol de sa slide. **/
slideShugoku.addEventListener('mouseenter', function() {
    videoShugoku.play();
});
/** On gère la mise en pause de la vidéo de Shugoku lors de la sortie de sa slide. **/
slideShugoku.addEventListener('mouseleave', function() {
    videoShugoku.pause();
});

/** On gère le lancement de la vidéo de Shikoku lors du survol de sa slide. **/
slideShikoku.addEventListener('mouseenter', function() {
    videoShikoku.play();
});
/** On gère la mise en pause de la vidéo de Shikoku lors de la sortie de sa slide. **/
slideShikoku.addEventListener('mouseleave', function() {
    videoShikoku.pause();
});


/** On gère le lancement de la vidéo de Chubu lors du survol de sa slide. **/
slideChubu.addEventListener('mouseenter', function() {
    videoChubu.play();
});
/** On gère la mise en pause de la vidéo de Chubu lors de la sortie de sa slide. **/
slideChubu.addEventListener('mouseleave', function() {
    videoChubu.pause();
});

/** On gère le lancement de la vidéo de Okinawa lors du survol de sa slide. **/
slideOkinawa.addEventListener('mouseenter', function() {
    videoOkinawa.play();
});
/** On gère la mise en pause de la vidéo de Okinawa lors de la sortie de sa slide. **/
slideOkinawa.addEventListener('mouseleave', function() {
    videoOkinawa.pause();
});