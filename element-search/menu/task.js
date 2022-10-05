const menuItem = document.querySelectorAll(".menu__link");
const allSubMenu = document.querySelectorAll(".menu_sub");
console.log(allSubMenu);
menuItem.forEach((Item) => {
  Item.onclick = (e) => {
    allSubMenu.forEach((elm) => {
      elm.className = "menu menu_sub";
    });
    const menuSub = Item.closest(".menu__item").querySelector(".menu_sub");

    // console.log(menuSub);
    if (menuSub) {
      menuSub.className = "menu menu_sub menu_active";
      e.preventDefault();
    }
  };
});
