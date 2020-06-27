// contact form

var contactLink = document.querySelector(".contact-link");
var contactPopup = document.querySelector(".modal-contact-form");
var contactClose = contactPopup.querySelector(".modal-close");
var contactForm = contactPopup.querySelector(".contact-form");
var contactName = contactPopup.querySelector("[name=name]");
var contactEmail = contactPopup.querySelector("[name=email]");
var contactText = contactPopup.querySelector("[name=text]");
var formField = contactPopup.querySelectorAll("p");
var inputField = contactPopup.querySelectorAll(".input-field");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");

  if (storageName && storageEmail) {
    contactName.value = storageName;
    contactEmail.value = storageEmail;
    contactText.focus();
  } else {
    contactName.focus();
  }
});

contactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
  contactPopup.classList.remove("modal-error");
  formField.forEach (element => element.classList.remove("input-error"));
  inputField.forEach (element => element.classList.remove("input-error"));
});

contactForm.addEventListener("submit", function (evt) {
  if (!contactName.value) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-error");
    contactName.classList.remove("input-error");
    formField[0].classList.remove("input-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactName.classList.add("input-error");
    contactName.focus();
    formField[0].classList.add("input-error");
    contactPopup.classList.add("modal-error");
  } else if (!contactEmail.value) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-error");
    contactEmail.classList.remove("input-error");
    formField[1].classList.remove("input-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactEmail.classList.add("input-error");
    contactEmail.focus();
    formField[1].classList.add("input-error");
    contactPopup.classList.add("modal-error");
  } else if (!contactText.value) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-error");
    contactText.classList.remove("input-error");
    formField[2].classList.remove("input-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactText.classList.add("input-error");
    contactText.focus();
    formField[2].classList.add("input-error");
    contactPopup.classList.add("modal-error");
  } else {
        if (isStorageSupport) {
          localStorage.setItem("name", contactName.value);
          localStorage.setItem("email", contactEmail.value);
        }
      }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
      contactPopup.classList.remove("modal-error");
      formField.forEach (element => element.classList.remove("input-error"));
      inputField.forEach (element => element.classList.remove("input-error"));
    }
  }
});

// map

var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});


// First slider

var slider = document.querySelector(".slider");
var wrapper = slider.querySelector(".slider-wrapper");
var slide = slider.querySelectorAll(".slide");
var controls = slider.querySelectorAll("button");

for (i=0; i < slide.length; i++) {
  controls[i].addEventListener("click", runSlider.bind(i));
}

function runSlider(evt) {
  evt.preventDefault();
  slide.forEach(element => element.classList.remove("slide-current"));
  controls.forEach(element => element.classList.remove("control-current"));
  slide[this].classList.add("slide-current");
  controls[this].classList.add("control-current");
  wrapper.classList.remove("slider-wrapper-1");
  wrapper.classList.remove("slider-wrapper-2");
  wrapper.classList.remove("slider-wrapper-3");
  wrapper.classList.add("slider-wrapper-"+(this+1));
}

// Services slider

var serviceSlider = document.querySelector(".services-slider");
var serviceButton = serviceSlider.querySelectorAll(".service-button");
var serviceSlide = serviceSlider.querySelectorAll(".services-item");

for (i=0; i < serviceSlide.length; i++) {
  serviceButton[i].addEventListener("click", runServiceSlider.bind(i));
}

function runServiceSlider(evt) {
  evt.preventDefault();
  serviceSlide.forEach(element => element.classList.remove("services-item-current"));
  serviceButton.forEach(element => element.classList.remove("service-button-current"));
  serviceSlide[this].classList.add("services-item-current");
  serviceButton[this].classList.add("service-button-current");
}
