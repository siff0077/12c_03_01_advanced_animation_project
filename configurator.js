"use strict"

const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.nav_menu');
 
menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

const features = {
  shower: false,
  rubberduck: false,
  water: false,
  towelone: false,
  toweltwo: false,
  woodtrayone: false,
  woodtraytwo: false,
};

document.addEventListener("DOMContentLoaded", start);
console.log("DOMContentLoaded");

let elementToPaint; 

async function start() {
  let response = await fetch("svg/sara_new-01.svg");
  let mySvgData = await response.text();
  document.querySelector("#bathtub_basic").innerHTML = mySvgData;
  // register toggle-clicks
  document
    .querySelectorAll(".option")
    .forEach(option => option.addEventListener("click", toggleOption));
    startManipulatingTheSvg(); 
}

function startManipulatingTheSvg(){
  document.querySelectorAll(".g_to_interact_with").forEach(eachG => {
    console.log(eachG);
    eachG.addEventListener("click", the_click);
    eachG.addEventListener("mouseover", the_mouseover);
    eachG.addEventListener("mouseout", the_mouseout);
  });
  document.querySelector("input[type='color']").addEventListener("input", clickColorInput);;
}

function the_click() {
  elementToPaint = this;
  this.style.fill = "grey";
}

function the_mouseover() {
  console.log(this);

  this.style.stroke = "orange";
}

function the_mouseout() {
  this.style.stroke = "none";
}

function clickColorInput() {
  if (elementToPaint !== undefined) {
    elementToPaint.style.fill = this.value;
    elementToPaint.style.stroke = "";
  }
}


function toggleOption(event) {
    const target = event.currentTarget;
    const feature = target.dataset.feature;
  
    //Toggle feature in model
    features[feature] = !features[feature];
    if (features[feature] === true) {
      if (feature === "towelone" && features.toweltwo === true) {
        document.querySelector(`[data-feature="toweltwo"]`).classList.add("hide");
        document.querySelector(`[data-feature="toweltwo"]`).classList.remove("chosen");
        features.towelonetwo = false;
        alert("You can't add two towels at once");
      } else if (feature === "toweltwo" && features.towelone === true) {
        document.querySelector(`[data-feature="towelone"]`).classList.add("hide");
        document.querySelector(`[data-feature="towelone"]`).classList.remove("chosen");
        features.towelone = false;
        alert("You can't add two towels at once");
      }
  
      if (feature === "woodtrayone" && features.woodtraytwo === true) {
        document.querySelector(`[data-feature="woodtraytwo"]`).classList.add("hide");
        document.querySelector(`[data-feature="woodtraytwo"]`).classList.remove("chosen");
        features.woodtrayone = false;
        alert("You can't add two trays at once");
      } else if (feature === "woodtraytwo" && features.woodtrayone === true) {
        document.querySelector(`[data-feature="woodtrayone"]`).classList.add("hide");
        document.querySelector(`[data-feature="woodtrayone"]`).classList.remove("chosen");
        features.woodtraytwo = false;
        alert("You can't add two trays at once");
      }

      console.log(target);
  
      //Select target and add chosen class
      target.classList.add("chosen");
  
      //Remove the hide class
      document.querySelector(`[data-feature="${feature}"]`).classList.remove("hide");
    } else {
      target.classList.remove("chosen");
  
      //Add the hide class
      document.querySelector(`[data-feature="${feature}"]`).classList.add("hide");
    }
  }

  function createFeatureElement(feature) {
    const li = document.createElement("li");
    li.dataset.feature = feature;
  
    const img = document.createElement("img");
    img.src = `svg/${feature}.png`;
    img.alt = capitalize(feature);
  
    li.append(img);
  
    return li;
  }
  
  function capitalize(text) {
    return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
  }