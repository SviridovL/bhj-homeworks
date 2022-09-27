const timer = document.getElementById("timer");
const countdown = function () {
  let time = +timer.textContent;
  if (time === 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(timerId);
  }
  timer.textContent = time - 1;
};
let timerId = setInterval(countdown, 1000);



