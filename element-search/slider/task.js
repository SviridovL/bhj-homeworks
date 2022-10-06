const arrowPlus = document.querySelector(".slider__arrow_next");
const arrowMinus = document.querySelector(".slider__arrow_prev");
const slide = document.querySelectorAll(".slider__item");
arrowPlus.addEventListener("click", plus);
arrowMinus.addEventListener("click", minus);
let i = 0;
function plus() {
  i = i + 1;
  slide.forEach((elm) => {
    elm.className = "slider__item";
  });
  slide[i].className = "slider__item slider__item_active";
  if (i >= slide.length - 1) {
    i = i - slide.length;
  }
}
function minus() {
  i = i - 1;
  slide.forEach((elm) => {
    elm.className = "slider__item";
  });
  slide[Math.abs(i)].className = "slider__item slider__item_active";
  if (Math.abs(i) >= slide.length - 1) {
    i = i + slide.length;
  }
}
