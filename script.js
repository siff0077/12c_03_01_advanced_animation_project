"use strict"
window.addEventListener("DOMContentLoaded", initPage);

function initPage() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { scrub: 0.3 }
  });



const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.nav_menu');

menu.addEventListener('click', function() {
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');

})
}






