const fontBtn = document.querySelectorAll(".font-size");
const book = document.getElementById("book");
fontBtn.forEach((element) => {
  element.addEventListener("click", fontChange);
});
function fontChange(e) {
  e.preventDefault();
  fontBtn.forEach((element) => {
    element.classList.remove("font-size_active");
  });
  const activeElement = e.currentTarget;
  activeElement.classList.add("font-size_active");

  const size = activeElement.getAttribute("data-size");

  if (size === "big") {
    book.className = "book";
    console.log(book.className);
    book.classList.add("book_fs-big");
    console.log(book.className);
  }
  if (size === "small") {
    book.className = "book";
    console.log(book.className);
    book.classList.add("book_fs-small");
    console.log(book.className);
  }
  if (!size) {
    book.className = "book";
    console.log(book.className);
  }
}
