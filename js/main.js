let nav = document.getElementById("nav"),
  logo = document.getElementById("logo");
window.addEventListener("scroll", () => {
  pageYOffset > 50
    ? (navlinkMobile.classList.add("hidden"),
      nav.classList.add("changed"),
      (logo.style.width = "70%"))
    : pageYOffset < 1 && nav.classList.remove("changed");
});
let btnHamburger = document.getElementById("btn-hamburger"),
  navlinkMobile = document.getElementById("navlink-mobile");
btnHamburger.addEventListener("click", () => {
  navlinkMobile.classList.toggle("hidden"),
    btnHamburger.classList.toggle("fa-times");
});
let productBtn = document.getElementsByClassName("product-btn"),
  divProduct = document.getElementsByClassName("div-products"),
  productDescription = document.getElementsByClassName("product-description"),
  consoleTitle = document.getElementById("console-header-title"),
  index = 0;
$(function () {
  $.getJSON("./sources/content.json", (e) => {
    divProduct[0].classList.add("div-products-selected"),
      (productDescription[0].innerHTML = e[0][0].content),
      (consoleTitle.innerHTML = e[0][0].title);
  });
  for (let e = 0; e < productBtn.length; e++)
    productBtn[e].addEventListener("click", () => {
      index != e &&
        (divProduct[index].classList.remove("div-products-selected"),
        divProduct[e].classList.add("div-products-selected"),
        (index = e)),
        $.getJSON("./sources/content.json", (t) => {
          (productDescription[0].innerHTML = t[e][0].content),
            (consoleTitle.innerHTML = t[e][0].title);
        });
    });
});
let submitBtn = document.getElementById("submitBtn"),
  inputName = document.getElementById("inputName"),
  inputEmail = document.getElementById("inputEmail"),
  inputCompany = document.getElementById("inputCompany"),
  inputPosition = document.getElementById("inputPosition"),
  inputMessage = document.getElementById("inputMessage");
submitBtn.addEventListener("click", (e) => {
  if (
    inputName.value.length > 0 &&
    inputEmail.value.length > 0 &&
    inputCompany.value.length > 0 &&
    inputPosition.value.length > 0 &&
    inputMessage.value.length > 0
  )
    new Notification("Message sent !");
});
