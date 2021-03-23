"use strict"
window.addEventListener("DOMContentLoaded", initPage);

function initPage() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { scrub: 0.3 }
  });



  gsap.registerPlugin(ScrollTrigger);
        gsap.to("#box1",{x: "10vw", scrollTrigger:{trigger:"#box1",scrub:true}});
        gsap.to("#box2",{x: "-10vw", scrollTrigger:{trigger:"#box2",scrub:true}});
        gsap.to("#box3",{x: "10vw", scrollTrigger:{trigger:"#box3",scrub:true}});
        gsap.to("#box4",{x: "-10vw", scrollTrigger:{trigger:"#box4",scrub:true}});
        gsap.to("#box5",{x: "10vw", scrollTrigger:{trigger:"#box5",scrub:true}});
        gsap.to("#box6",{x: "-10vw", scrollTrigger:{trigger:"#box6",scrub:true}});





const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.nav_menu');

menu.addEventListener('click', function() {
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');

})
}






