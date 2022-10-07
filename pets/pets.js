"use strict";

//hamburger menu -hide after click
const hamburger = document.querySelectorAll(".menu li a");
const navbar = document.querySelector(".navbar");
const toggle = document.querySelector("#toggle");

const hide = function () {
  navbar.style.transform = "scale(0)";
  toggle.checked = false;
};
const show = function () {
  navbar.style.transform = "scale(1)";
};

for (let i = 0; i < hamburger.length; i++) {
  hamburger[i].addEventListener("click", hide);
}
navbar.addEventListener("click", show);

///get data from json

fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    this.name = data.name;
    this.img = data.img;
    this.type = data.type;
    this.breed = data.breed;
    this.description = data.description;
    this.age = data.age;
    this.inoculations = data.inoculations;
    this.diseases = data.diseases;
    this.parasites = data.parasites;
    this.data = data;

    // create cards
    const card = document.querySelector(".cards");
    let prop, id;
 
    for (prop in this.data) {
      const cardEl = document.createElement("div");
      cardEl.classList.add("card-el");
      card.appendChild(cardEl);
      cardEl.innerHTML = `<img src="${this.data[prop].img}" alt="">
      <p class="pet-name">${this.data[prop].name}</p>
      <button class="learn-more">Learn More</button>`;
    }


    //Modal window

    const overlay = document.querySelector(".overlay");
    const showBtn = document.querySelectorAll(".learn-more");
    

    for (prop in this.data) {
      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.classList.add("hidden");
      card.parentNode.insertBefore(modal, card.nextSibling);
      modal.innerHTML = `<button class="close-modal">&times;</button>
      <div class="modal-container">
        <img class='not-for-mobile'src="${this.data[prop].img}" alt="">
      <div class="modal-txt">
      <h1 class="modal-title">${this.data[prop].name}</h1>
      <h2 class="modal-subtitle">Dog - ${this.data[prop].breed}</h2>
      <p class="modal-p">${this.data[prop].description}</p>
      <ul class="properties">
        <li><b>Age:</b> ${this.data[prop].age}</li>
        <li><b>Inoculations:</b> ${this.data[prop].inoculations}</li>
        <li><b>Diseases:</b> ${this.data[prop].diseases}</li>
        <li><b>Parasites:</b> ${this.data[prop].parasites}</li>
      </ul>
      </div>
    </div>`;
    }
   
   
    const closeBtn = document.querySelector(".close-modal");
    const modal=document.querySelector(".modal");
   
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
  });
