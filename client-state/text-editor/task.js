let saveText = localStorage.getItem("text");
const save = document.getElementById("editor");
save.value = saveText;
save.addEventListener("blur", (e) => {
  const textInput = save.value;
  console.log(textInput);
  saveText = localStorage.setItem("text", textInput);
});
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  save.value = "";
  localStorage.clear();
});
