/**
 * Création d'un ensemble d'objets JS, un pour chaque container html contenant une vidéo dans le slider,
 * pour permettre ensuite de les manipuler.
 **/

let slideHokkaido = document.getElementById('slide-hokkaido');
let slideTohoku = document.getElementById('slide-tohoku');
let slideKanto = document.getElementById('slide-kanto');
let slideKyushu = document.getElementById('slide-kyushu');
let slideKansai = document.getElementById('slide-kansai');
let slideShugoku = document.getElementById('slide-shugoku');
let slideShikoku = document.getElementById('slide-shikoku');
let slideChubu = document.getElementById('slide-chubu');
let slideOkinawa = document.getElementById('slide-okinawa');

/**
 * Création d'un ensemble d'objets JS, un pour chaque vidéo dans le slider,
 * pour permettre ensuite de les manipuler.
 **/

let videoHokkaido = document.getElementById('video-hokkaido');
let videoTohoku = document.getElementById('video-tohoku');
let videoKanto = document.getElementById('video-kanto');
let videoKyushu = document.getElementById('video-kyushu');
let videoKansai = document.getElementById('video-kansai');
let videoShugoku = document.getElementById('video-shugoku');
let videoShikoku = document.getElementById('video-shikoku');
let videoChubu = document.getElementById('video-chubu');
let videoOkinawa = document.getElementById('video-okinawa');

/**
 * Pour chaque container, on créer une fonction qui s'exécutera lors du survol de l'élément. Cette fonction démarre la vidéo.
 **/

slideHokkaido.addEventListener('mouseenter', function() {
    videoHokkaido.play();
});

slideTohoku.addEventListener('mouseenter', function() {
    videoTohoku.play();
});

slideKanto.addEventListener('mouseenter', function() {
    videoKanto.play();
});

slideKyushu.addEventListener('mouseenter', function() {
    videoKyushu.play();
});

slideKansai.addEventListener('mouseenter', function() {
    videoKansai.play();
});

slideShugoku.addEventListener('mouseenter', function() {
    videoShugoku.play();
});

slideShikoku.addEventListener('mouseenter', function() {
    videoShikoku.play();
});

slideChubu.addEventListener('mouseenter', function() {
    videoChubu.play();
});

slideOkinawa.addEventListener('mouseenter', function() {
    videoOkinawa.play();
});

/**
 * De la même manière, on créer une fonction qui s'exécuteras lorsque la souris quitte l'élément. Cette fonction arrête la vidéo.
 **/

slideHokkaido.addEventListener('mouseleave', function() {
    videoHokkaido.pause();
});

slideTohoku.addEventListener('mouseleave', function() {
    videoTohoku.pause();
});

slideKanto.addEventListener('mouseleave', function() {
    videoKanto.pause();
});

slideKyushu.addEventListener('mouseleave', function() {
    videoKyushu.pause();
});

slideKansai.addEventListener('mouseleave', function() {
    videoKansai.pause();
});

slideShugoku.addEventListener('mouseleave', function() {
    videoShugoku.pause();
});

slideShikoku.addEventListener('mouseleave', function() {
    videoShikoku.pause();
});

slideChubu.addEventListener('mouseleave', function() {
    videoChubu.pause();
});

slideOkinawa.addEventListener('mouseleave', function() {
    videoOkinawa.pause();
});