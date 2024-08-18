'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// modal variable
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {

//   testimonialsItem[i].addEventListener("click", function () {

//     modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

//     testimonialsModalFunc();

//   });

// }

// // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

function handleVisibility(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        setRandomGradient();
        // observer.unobserve(entry.target);
      }
  });
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleVisibility, {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin around the root
  threshold: 0.1 // Trigger callback when 10% of the target is visible
});

// Target the div to be observed
const targetDiv = document.getElementById('skillsWrapper');
observer.observe(targetDiv);


function setRandomGradient() {
  const gradientArray = [
    {angle:"43", initialColor:"#4158D0" ,initialColorPercentage:"0", middleColor:"#C850C0" , middleColorPercentage:"46", finalColor:"#FFCC70", finalColorPercentage:"100"},
    {angle:"160",initialColor:" #0093E9",initialColorPercentage:"0",middleColor:"#80D0C7", middleColorPercentage:"100"},
    {angle:"62", initialColor:"#8EC5FC" ,initialColorPercentage:"0", middleColor:"#E0C3FC" , middleColorPercentage:"100"},
    {angle:"90", initialColor:"#00DBDE" ,initialColorPercentage:"0", middleColor:"#FC00FF" , middleColorPercentage:"100"},
    {angle:"45", initialColor:"#85FFBD" ,initialColorPercentage:"0", middleColor:"#FFFB7D" , middleColorPercentage:"100"},
    {angle:"135",initialColor:"#8BC6EC",initialColorPercentage:"0",middleColor:" #9599E2", middleColorPercentage: "100"},
  ];

  
  const gradientDiv = document.querySelectorAll('.skills');

  gradientDiv.forEach(element => {
    const index =  Math.floor(Math.random() * ((gradientArray.length - 1) - 0 + 1) + 0); 
    console.log(index);
    
    const gradientValue = `${gradientArray[index]?.angle}deg, ${generatefirstGradientValue(gradientArray[index])} ${generateSecondGradientValue(gradientArray[index])} ${generateThirdGradientValue(gradientArray[0])}`;
    element.style.setProperty('--gradient',`linear-gradient(${gradientValue})`);
  }); 
}

function generatefirstGradientValue(gradientValue){
  return `${gradientValue?.initialColor} ${gradientValue?.initialColorPercentage}%,`;
}

function generateSecondGradientValue(gradientValue){
  if(!gradientValue.hasOwnProperty('finalColor'))
    return ``;
  return `${gradientValue?.middleColor} ${gradientValue?.middleColorPercentage}%,`;
}

function generateThirdGradientValue(gradientValue){
  if(!gradientValue.hasOwnProperty('finalColor'))
    return `${gradientValue?.middleColor} ${gradientValue?.middleColorPercentage}%,`;
  return `${gradientValue?.finalColor} ${gradientValue?.finalColorPercentage}%`;
}