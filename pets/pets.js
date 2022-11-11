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

fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw Error("ERROR");
    }
    return response.json();
  })
  .then((data) => {
    let info = data;
    info.map((arr) => {
      // create cards
      const card = document.querySelector(".cards");
      const cardEl = document.createElement("div");
      cardEl.classList.add("card-el");
      card.appendChild(cardEl);
      cardEl.innerHTML = `<img src="${arr.img}" alt="">
      <p class="pet-name">${arr.name}</p>`;

      const showBtn = document.createElement("button");
      showBtn.className = "learn-more";
      showBtn.textContent = "Learn More";
      cardEl.appendChild(showBtn);
      //Modal window

      const overlay = document.querySelector(".overlay");

      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.classList.add("hidden");
      card.parentNode.insertBefore(modal, card.nextSibling);
      modal.innerHTML = `<button class="close-modal">&times;</button>
      <div class="modal-container">
        <img class='not-for-mobile'src="${arr.img}" alt="">
      <div class="modal-txt">
      <h1 class="modal-title">${arr.name}</h1>
      <h2 class="modal-subtitle">Dog - ${arr.breed}</h2>
      <p class="modal-p">${arr.description}</p>
      <ul class="properties">
        <li><b>Age:</b> ${arr.age}</li>
        <li><b>Inoculations:</b> ${arr.inoculations}</li>
        <li><b>Diseases:</b> ${arr.diseases}</li>
        <li><b>Parasites:</b> ${arr.parasites}</li>
      </ul>
      </div>
    </div>`;

      const closeBtn = document.querySelector(".close-modal");

      const openModal = function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
      };

      const closeModal = function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
      };

      showBtn.addEventListener("click", openModal);

      closeBtn.addEventListener("click", closeModal);
      overlay.addEventListener("click", closeModal);

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
          closeModal();
        }
      });
    });
  });
