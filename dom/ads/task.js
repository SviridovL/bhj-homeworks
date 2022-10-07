setInterval(rotor, 1000);
const rotator = document.querySelectorAll(".rotator__case");
const rotatorArr = Array.from(rotator);
let i = 0;
function rotor() {
  rotator.forEach((element) => {
    element.className = "rotator__case";
  });
  rotatorArr[i].classList.add("rotator__case_active");
  let color = rotatorArr[i].getAttribute("data-color");
  let speed = rotatorArr[i].getAttribute("data-speed");
  console.log(color, speed);
  rotatorArr[i].style.color = color;
  rotatorArr[i].style.speed = speed;
  i = i + 1;
  if (i === rotatorArr.length) {
    i = 0;
  }
}
