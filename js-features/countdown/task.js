// const timer = document.getElementById("timer");
// const countdown = function () {
//   let time = +timer.textContent;
//   if (time === 0) {
//     alert("Вы победили в конкурсе!");
//     clearInterval(timerId);
//return
//   }
//   timer.textContent = time - 1;
// };
// let timerId = setInterval(countdown, 1000);

const HH = document.getElementById("HH");
const MM = document.getElementById("MM");
const SS = document.getElementById("SS");
let S = Number(SS.textContent);
let M = Number(MM.textContent);
let H = Number(HH.textContent);
const countdown = function () {
  if (S === 0) {
    M = M - 1;
    S = 60;
    MM.textContent = M;
    if (M < 10) {
      MM.textContent = `0${M}`;
    }
  }
  if (M === -1) {
    H = H - 1;
    M = 59;
    MM.textContent = M;
    HH.textContent = H;
    if (H < 10) {
      HH.textContent = `0${H}`;
    }
  }
  S = S - 1;
  SS.textContent = S;
  if (S < 10) {
    SS.textContent = `0${S}`;
  }
  if (H === 0 && M == 0 && S === 0) {
    alert("Вы победили в конкурсе!");

    clearInterval(timerId);
    return;
  }
};
let timerId = setInterval(countdown, 1000);
