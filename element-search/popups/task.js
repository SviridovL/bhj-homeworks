let pop = document.getElementById("modal_main");
pop.className = "modal modal_active";

let btn = document.querySelector(".show-success");
btn.onclick = () => {
  let success = document.getElementById("modal_success");
  success.className = "modal modal_active";
};

let clsSuccess = document.querySelectorAll(".modal__close_times");
let allWindow = document.querySelectorAll(".modal");
clsSuccess.forEach((item) => {
  item.onclick = () => {
    allWindow.forEach((elm) => {
      elm.className = "modal";
    });
  };
});

