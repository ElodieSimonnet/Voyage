/**
 * Création d'un ensemble d'objets JS, un pour chaque element html des boutons circulaires,
 * pour permettre ensuite de les manipuler.
 **/

let circleBtn1 = document.querySelector('#circle-btn-1');
let circleBtn2 = document.querySelector('#circle-btn-2');
let circleBtn3 = document.querySelector('#circle-btn-3');
let circleBtn4 = document.querySelector('#circle-btn-4');
let circleBtn5 = document.querySelector('#circle-btn-5');
let circleBtn6 = document.querySelector('#circle-btn-6');
let circleBtn7 = document.querySelector('#circle-btn-7');
let circleBtn8 = document.querySelector('#circle-btn-8');
let circleBtn9 = document.querySelector('#circle-btn-9');
let circleBtn10 = document.querySelector('#circle-btn-10');
let circleBtn11 = document.querySelector('#circle-btn-11');
let circleBtn12 = document.querySelector('#circle-btn-12');

/**
 * Pour chacun des objets JS, on créer une fonction qui détecte le click sur l'élément.
 * Cette fonction applique ou retire la classe CSS "clicked" à l'élement, ce qui permet d'afficher ou non le contenu à sa taille réelle.
 **/

circleBtn1.addEventListener('click', function() {
  this.classList.toggle('clicked');
});

circleBtn2.addEventListener('click', function() {
  this.classList.toggle('clicked');
});

circleBtn3.addEventListener('click', function() {
  this.classList.toggle('clicked');
});

circleBtn4.addEventListener('click', function() {
  this.classList.toggle('clicked');
});

circleBtn5.addEventListener('click', function() {
  this.classList.toggle('clicked');
});

circleBtn6.addEventListener('click', function() {
  this.classList.toggle('clicked');
});

circleBtn7.addEventListener('click', function() {
  this.classList.toggle('clicked');
});

circleBtn8.addEventListener('click', function() {
  this.classList.toggle('clicked');
});

circleBtn9.addEventListener('click', function() {
  this.classList.toggle('clicked');
});

circleBtn10.addEventListener('click', function() {
  this.classList.toggle('clicked');
});

circleBtn11.addEventListener('click', function() {
  this.classList.toggle('clicked');
});

circleBtn12.addEventListener('click', function() {
  this.classList.toggle('clicked');
});