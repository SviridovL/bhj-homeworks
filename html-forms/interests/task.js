const interestCheck = document.querySelectorAll(".interest__check");
interestCheck.forEach((elm) => {
  const interestCheckSub = elm
    .closest(".interest")
    .querySelector(".interests_active");
  console.log(interestCheckSub);
  if (interestCheckSub) {
    elm.addEventListener("change", checked);
  }
});
function checked(event) {
  const sub = event.currentTarget.closest(".interest");
  const subSub = sub.querySelectorAll("input");
  for (let i = 1; i < subSub.length; i++) {
    if (subSub[i].checked) {
      subSub[i].checked = false;
    } else {
      subSub[i].checked = true;
    }
  }
}
