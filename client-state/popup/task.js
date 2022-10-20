if (!document.cookie) {
  console.log("open" + document.cookie);
  let pop = document.getElementById("subscribe-modal");
  pop.className = "modal modal_active";
  let clsSuccess = document.querySelector(".modal__close_times");
  clsSuccess.onclick = () => {
    pop.className = "modal";
    document.cookie = "counter=1;max-age=3600";
    console.log("close" + document.cookie);
  };
}
