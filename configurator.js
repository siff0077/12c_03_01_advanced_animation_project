"use strict"

const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.nav_menu');
 
menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

document.addEventListener("DOMContentLoaded", start);
console.log("DOMContentLoaded");


async function start() {
  let response = await fetch("svg/bathtub-01.svg");
  let mySvgData = await response.text();
  document.querySelector("#bathtub_basic").innerHTML = mySvgData;
  // register toggle-clicks
  /* document
    .querySelectorAll(".option")
    .forEach(option => option.addEventListener("click", toggleOption));
  addUserInteraction(); */
}

