"use strict";

const tabs = document.querySelector(".tabs");
const marker = document.querySelector(".tabs__active--marker");
const faq = document.querySelector(".faq");
const contactForm = document.querySelector(".contact__form");

let markerPos = 1;

// Tabs Event Listener
tabs.addEventListener("click", function (e) {
  const btnTab = e.target.closest(".tabs__link");
  if (!btnTab) return;
  const tab = btnTab.dataset.tab;
  const maxWidth = 100;
  const tabLinksNumber = tabs.querySelectorAll(".tabs__link").length;

  markerPos = +tab[tab.length - 1] - 1;

  // Hide Preview Content
  addHiddenClass(document, ".preview-content", "hidden");
  // Toggle class hidden on active content
  document.querySelector("." + tab).classList.toggle("hidden");

  marker.style.left = `${markerPos * (maxWidth / tabLinksNumber)}%`;
});

// FAQ Event Listener
faq.addEventListener("click", function (e) {
  const btn = e.target.closest(".faq__item");
  if (!btn) return;

  addHiddenClass(document, ".faq__answer", "slideUp");

  this.querySelectorAll(".fa-chevron-down").forEach((icon) =>
    icon.classList.remove("faq-checked")
  );
  btn.nextElementSibling.classList.remove("slideUp");
  btn.querySelector(".fa-chevron-down").classList.add("faq-checked");
});

// Hide Elements Function
const addHiddenClass = function (parentEl, elem, classN) {
  parentEl.querySelectorAll(elem).forEach((content) => {
    content.classList.add(`${classN}`);
  });
};

// Tab port version
if (window.innerWidth <= 900) {
  tabs.addEventListener("click", function (e) {
    if (e.target.classList.contains("tabs__link")) {
      const tab = e.target;
      const markup = `<span class="marker-mob"></span>`;
      tabs.querySelector(".marker-mob").remove();
      tab.insertAdjacentHTML("beforeend", markup);
    }
  });
}
