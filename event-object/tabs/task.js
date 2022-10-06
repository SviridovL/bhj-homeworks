const tabAll = document.querySelectorAll(".tab");
const contentAll = document.querySelectorAll(".tab__content");
for (let i = 0; i < tabAll.length; i++) {
  tabAll[i].addEventListener("click", openTab);
  function openTab() {
    tabAll.forEach((element) => {
      element.className = "tab";
    });
    contentAll.forEach((item) => {
      item.className = "tab__content";
    });

    tabAll[i].className = "tab tab_active";

    contentAll[i].className = "tab__content tab__content_active";
    console.log(contentAll[i].className);
  }
}
