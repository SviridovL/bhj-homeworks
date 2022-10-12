const tooltip = document.querySelectorAll(".has-tooltip");

tooltip.forEach((element) => {
  const buble = function (e) {
    const active = document.querySelectorAll("tooltip_active");
    const tooltipTitle = element.getAttribute("title");
    const temp = document.querySelector(".tooltip_active");
    console.log(temp);
    if (temp) {
      temp.remove();
    }
    let activeBuble = document.createElement("div");
    activeBuble.className = "tooltip";
    activeBuble.classList.add("tooltip_active");
    activeBuble.innerText = tooltipTitle;
    activeBuble.style.cssText += "left:0;top:0";
    //activeBuble.setAttribute("data-position:top");
    element.appendChild(activeBuble);

    e.preventDefault();
  };
  element.addEventListener("click", buble);
});
