setInterval(rotor, 1000);
const rotator = document.querySelectorAll(".rotator__case");
const rotatorArr = Array.from(rotator);
console.log(rotatorArr);
let i = 0;
function rotor() {
  rotator.forEach((element) => {
    element.className = "rotator__case";
  });
  rotatorArr[i].classList.add("rotator__case_active");
  i = i + 1;
  if (i === rotatorArr.length) {
    i = 0;
  }
}
