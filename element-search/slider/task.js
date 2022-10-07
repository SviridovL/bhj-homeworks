const arrowPlus = document.querySelector(".slider__arrow_next");
const arrowMinus = document.querySelector(".slider__arrow_prev");
const slide = document.querySelectorAll(".slider__item");
arrowPlus.addEventListener("click", plus);
arrowMinus.addEventListener("click", minus);
let i = 0;
function plus() {
  i = i + 1;
  if (i >= slide.length) {
    i = i - slide.length;
  }
  slide.forEach((elm) => {
    elm.className = "slider__item";
  });
  dot.forEach((elm) => {
    elm.className = "slider__dot";
  });
  slide[Math.abs(i)].className = "slider__item slider__item_active";
  dotArr[Math.abs(i)].className = "slider__dot slider__dot_active";
  if (i >= slide.length) {
    i = i - slide.length;
  }
}
function minus() {
  i = i - 1;
  if (Math.abs(i) >= slide.length) {
    i = i + slide.length;
  }
  slide.forEach((elm) => {
    elm.className = "slider__item";
  });
  dot.forEach((elm) => {
    elm.className = "slider__dot";
  });
  slide[Math.abs(i)].className = "slider__item slider__item_active";
  dotArr[Math.abs(i)].className = "slider__dot slider__dot_active";
  if (Math.abs(i) >= slide.length) {
    i = i + slide.length;
  }
}
const dot = document.querySelectorAll(".slider__dot");
const dotArr = Array.from(dot);
dot.forEach((item) => {
  item.addEventListener("click", dots);
});
function dots(event) {
  slide.forEach((elm) => {
    elm.className = "slider__item";
  });
  dot.forEach((elm) => {
    elm.className = "slider__dot";
  });
  if (Math.abs(i) === slide.length && i < 0) {
    i = i + slide.length;
  } else {
    i = i - slide.length;
  }
  event.currentTarget.className = "slider__dot slider__dot_active";
  //let index = dotArr.indexOf(event.currentTarget);
  i = dotArr.indexOf(event.currentTarget);
  slide[Math.abs(i)].className = "slider__item slider__item_active";
  if (Math.abs(i) === slide.length && i < 0) {
    i = i + slide.length;
  } else {
    i = i - slide.length;
  }
}
