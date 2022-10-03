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

//Modal window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const showBtn = document.querySelectorAll(".learn-more");
const backgroundColor = document.querySelector(".our-friends");

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

///

let petName,
  img,
  type,
  breed,
  description,
  age,
  inoculations,
  diseases,
  parasites,
  data;

fetch("main page/data.json")
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

    for (let prop in this.data) {
      const cardEl = document.createElement("div");

      cardEl.classList.add("card-el");
      card.appendChild(cardEl);
      cardEl.innerHTML = `<img src="${this.data[prop].img}" alt="">
    <p class="pet-name">${this.data[prop].name}</p>
    <button class="learn-more">Learn More</button>`;
    }

    // carousel
    const prevBtn = document.querySelector(".previous");
    const nextBtn = document.querySelector(".next");

    let idx = 0;

    const length = this.data.length - 1;

    function changeCard() {
      if (idx > length-1) {
        idx = 0;
      } else if (idx < 0) {
        idx = length;
      }
      card.style.transform = `translateX(${-idx * 310}px)`;
    }

    nextBtn.addEventListener("click", () => {
      idx++;
      changeCard();
    });

    prevBtn.addEventListener("click", () => {
      idx--;
      changeCard();
    });
  });
