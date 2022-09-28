cookie.onclick = function () {
  let cookie = document.getElementById("cookie");
  const clicker__counter = document.getElementById("clicker__counter");
  console.log(clicker__counter.textContent);
  const counter = Number(clicker__counter.textContent) + 1;
  clicker__counter.textContent = counter;
  console.log(clicker__counter.textContent);
  if (cookie.width === 200) {
    cookie.width = 100;
  } else if (cookie.width === 100) {
    cookie.width = 200;
  }
  return;
};
