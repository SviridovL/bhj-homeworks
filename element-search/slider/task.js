const arrowPlus = document.querySelector(".slider__arrow_next");
const arrowMinus = document.querySelector(".slider__arrow_prev");
const slide = document.querySelectorAll(".slider__item");
arrowPlus.addEventListener("click", plus);
arrowMinus.addEventListener("click", minus);
const dot = document.querySelectorAll(".slider__dot");
const dotArr = Array.from(dot);

dot.forEach((item) => {
  item.addEventListener("click", dots);
});

let i = 0;

function plus() {
  i = (i + 1) % slide.length;
  // i = i + 1;
  // if (Math.abs(i) >= slide.length) {
  //   i = i - slide.length;
  // }
  common();
  // if (i >= slide.length) {
  //   i = i - slide.length;
  // }
}

function minus() {
  i = (i - 1) % slide.length;
  //i = i - 1;
  // if (Math.abs(i) >= slide.length) {
  //   i = i + slide.length;
  // }
  common();
  // if (Math.abs(i) >= slide.length) {
  //   i = i + slide.length;
  // }
}

function dots(event) {
  i = (i + 1) % slide.length;
  // if (Math.abs(i) === slide.length && i < 0) {
  //   i = i + slide.length;
  // } else {
  //   i = i - slide.length;
  // }
  i = dotArr.indexOf(event.currentTarget);
  common();

  // if (Math.abs(i) === slide.length && i < 0) {
  //   i = i + slide.length;
  // } else {
  //   i = i - slide.length;
  // }
}

function common() {
  slide.forEach((elm) => {
    elm.className = "slider__item";
  });
  dot.forEach((elm) => {
    elm.className = "slider__dot";
  });
  slide[Math.abs(i)].className = "slider__item slider__item_active";
  dotArr[Math.abs(i)].className = "slider__dot slider__dot_active";
}
