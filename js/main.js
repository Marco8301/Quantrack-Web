// Add header background on scroll

let nav = document.getElementById("nav");
let logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
  if (pageYOffset > 50) {
    navlinkMobile.classList.add("hidden");
    nav.classList.add("changed");
    logo.style.width = "70%";
  } else if (pageYOffset < 1) {
    nav.classList.remove("changed");
  }
});

// Make hamburger Menu disappear/appear

let btnHamburger = document.getElementById("btn-hamburger");
let navlinkMobile = document.getElementById("navlink-mobile");

btnHamburger.addEventListener("click", () => {
  navlinkMobile.classList.toggle("hidden");
  btnHamburger.classList.toggle("fa-times");
});

// Products

let productBtn = document.getElementsByClassName("product-btn");
let divProduct = document.getElementsByClassName("div-products");
let productDescription = document.getElementsByClassName("product-description");
let consoleTitle = document.getElementById("console-header-title");
let index = 0;

$(function () {
  $.getJSON("./sources/content.json", (data) => {
    divProduct[0].classList.add("div-products-selected");
    productDescription[0].innerHTML = data[0][0]["content"];
    // productDescription[1].innerHTML = data[0][1]["content"];
    // productDescription[2].innerHTML = data[0][2]["content"];
    consoleTitle.innerHTML = data[0][0]["title"];
  });

  for (let i = 0; i < productBtn.length; i++) {
    productBtn[i].addEventListener("click", () => {
      if (index != i) {
        divProduct[index].classList.remove("div-products-selected");
        divProduct[i].classList.add("div-products-selected");
        index = i;
      }

      $.getJSON("./sources/content.json", (data) => {
        productDescription[0].innerHTML = data[i][0]["content"];
        // productDescription[1].innerHTML = data[i][1]["content"];
        // productDescription[2].innerHTML = data[i][2]["content"];
        consoleTitle.innerHTML = data[i][0]["title"];
      });
    });
  }
});

// Send notification when form is submitted

let submitBtn = document.getElementById("submitBtn");
let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("inputEmail");
let inputCompany = document.getElementById("inputCompany");
let inputPosition = document.getElementById("inputPosition");
let inputMessage = document.getElementById("inputMessage");

submitBtn.addEventListener("click", (event) => {
  if (
    inputName.value.length > 0 &&
    inputEmail.value.length > 0 &&
    inputCompany.value.length > 0 &&
    inputPosition.value.length > 0 &&
    inputMessage.value.length > 0
  ) {
    var notification = new Notification("Message sent !");
  }
});
