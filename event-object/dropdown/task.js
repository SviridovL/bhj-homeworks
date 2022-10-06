let menu = document.querySelector(".dropdown__value");
let list = document.querySelector(".dropdown__list");
menu.onclick = () => {
  list.className = "dropdown__list dropdown__list_active";
};
let menuLink = document.querySelectorAll(".dropdown__link");
menuLink.forEach((link) => {
  link.onclick = (e) => {
    //  e.preventDefault();
    let c = link.textContent;
    menu.textContent = c;
    list.className = "dropdown__list";
    return false;
  };
});
