'use strict';



// Add eventListener on multiple elements 

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



// PRELOADER
 

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



// MOBILE NAV TOGGLE 

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

navToggler.addEventListener("click", toggleNavbar);



/*HEADER
 active header when window scrolled to 50px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);


// Form Validation

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const submitBtn = document.getElementById('submitBtn');

  submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    let isValid = true;

    // Basic validation for name
    if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      isValid = false;
    }

    // Basic validation for email
    if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
      alert('Please enter a valid email address.');
      isValid = false;
    }

    // Basic validation for message
    if (messageInput.value.trim() === '') {
      alert('Please enter your message.');
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if validation fails
          }
          
    if (isValid) {
      form.submit();
          }
    });
   

  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});