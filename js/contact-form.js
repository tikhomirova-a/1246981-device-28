var contactLink = document.querySelector(".contact-link");
var contactPopup = document.querySelector(".modal-contact-form");
var contactClose = contactPopup.querySelector(".modal-close");
var contactForm = contactPopup.querySelector(".contact-form");
var contactName = contactPopup.querySelector("[name=name]");
var contactEmail = contactPopup.querySelector("[name=email]");
var contactText = contactPopup.querySelector("[name=text]");

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
  contactPopup.classList.remove("modal-invalid");
});

contactForm.addEventListener("submit", function (evt) {
  if (!contactName.value || !contactEmail.value || !contactText.value) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-invalid");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("modal-invalid");
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
      contactPopup.classList.remove("modal-invalid");
    }
  }
});


var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault;
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

