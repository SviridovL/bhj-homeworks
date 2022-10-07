document.addEventListener("scroll", show);
function show(element) {
  const reveal = document.querySelectorAll(".reveal");
  const viewportHeight = window.innerHeight;
  console.log(viewportHeight);
  reveal.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    console.log(elementTop);
    if (elementTop < viewportHeight) {
      element.className = "reveal reveal_active";
      console.log(element.className);
    }
    return;
  });
}
