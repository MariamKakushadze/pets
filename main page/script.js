"use strict";


//hamburger menu -hide after click
const hamburger=document.querySelectorAll('.menu li a');
const navbar=document.querySelector('.navbar');
const toggle=document.querySelector('#toggle');

const hide=function(){
  navbar.style.transform="scale(0)";
  toggle.checked=false;
}
const show=function(){
  navbar.style.transform="scale(1)";
}

for (let i = 0; i < hamburger.length; i++){
    hamburger[i].addEventListener('click',hide); 
}
navbar.addEventListener('click', show);


//Modal window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const showBtn = document.querySelectorAll(".learn-more");
const backgroundColor=document.querySelector('.our-friends'); 

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showBtn.length; i++)
  showBtn[i].addEventListener("click", openModal);
    
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
