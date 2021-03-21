"use strict"

const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.nav_menu');
 
menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
 
})