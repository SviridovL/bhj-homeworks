const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let deadmole;
let lostmole;
for (index = 1; index <= 9; index++) {
  const getHole = (index) => document.getElementById(`hole${index}`);
  const clicker = getHole(index);
  clicker.onclick = () => {
    if (clicker.className.includes("hole_has-mole")) {
      console.log(dead.textContent);
      let deadmole = Number(dead.textContent) + 1;
      dead.textContent = deadmole;
      if (deadmole === 10) {
        alert("WIN!");
        lostmole = 0;
        deadmole = 0;
        dead.textContent = deadmole;
        lost.textContent = lostmole;
      }
    } else {
      let lostmole = Number(lost.textContent) + 1;
      lost.textContent = lostmole;
      if (lostmole === 5) {
        alert("LOST!");
        lostmole = 0;
        deadmole = 0;
        dead.textContent = deadmole;
        lost.textContent = lostmole;
      }
    }
  };
}
