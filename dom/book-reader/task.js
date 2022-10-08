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
    // book.className = "book";
    book.classList.remove("book_fs-small");
    book.classList.add("book_fs-big");
  }
  if (size === "small") {
    // book.className = "book";
    book.classList.remove("book_fs-big");
    book.classList.add("book_fs-small");
  }
  if (!size) {
    book.classList.remove("book_fs-big");
    book.classList.remove("book_fs-small");
  }
}

let fontColor = document.querySelector(".book__control_color");
const tmpColor = fontColor.children;
fontColor = Array.from(tmpColor);
fontColor.forEach((element) => {
  if (element.matches("a")) {
    element.addEventListener("click", textColor);
  }
});

function textColor(e) {
  e.preventDefault();
  fontColor.forEach((element) => {
    element.classList.remove("color_active");
  });
  activeElement = e.currentTarget;
  activeElement.classList.add("color_active");
  const color = activeElement.getAttribute("data-text-color");
  if (color === "black") {
    book.classList.remove("book_color-whitesmoke");
    book.classList.remove("book_color-gray");
    book.classList.add("book_color-black");
  }
  if (color === "whitesmoke") {
    book.classList.remove("book_color-black");
    book.classList.remove("book_color-gray");
    book.classList.add("book_color-whitesmoke");
  }
  if (color === "gray") {
    book.classList.remove("book_color-whitesmoke");
    book.classList.remove("book_color-black");
    book.classList.add("book_color-gray");
  }
}

let bgColor = document.querySelector(".book__control_background");
const tmpBgColor = bgColor.children;
bgColor = Array.from(tmpBgColor);
bgColor.forEach((element) => {
  if (element.matches("a")) {
    element.addEventListener("click", backgroundColor);
  }
});

function backgroundColor(e) {
  e.preventDefault();
  bgColor.forEach((element) => {
    element.classList.remove("color_active");
  });
  activeElement = e.currentTarget;
  activeElement.classList.add("color_active");
  const color = activeElement.getAttribute("data-bg-color");
  if (color === "black") {
    book.classList.remove("book_bg-white");
    book.classList.remove("book_bg-gray");
    book.classList.add("book_bg-black");
  }
  if (color === "white") {
    book.classList.remove("book_bg-black");
    book.classList.remove("book_bg-gray");
    book.classList.add("book_bg-white");
  }
  if (color === "gray") {
    book.classList.remove("book_bg-white");
    book.classList.remove("book_bg-black");
    book.classList.add("book_bg-gray");
  }
}
