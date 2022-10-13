const btn = document.getElementById("tasks__add");
btn.addEventListener("click", (e) => {
  const input = document.getElementById("task__input");
  const inputText = input.value;
  if (!inputText) {
    return;
  }
  input.value = "";
  const tasksList = document.getElementById("tasks__list");
  let newTask = document.createElement("div");
  newTask.className = "task";
  let taskTitle = document.createElement("div");
  taskTitle.className = "task__title";
  taskTitle.innerText = inputText;
  newTask.appendChild(taskTitle);
  newTask.insertAdjacentHTML(
    "beforeend",
    '<a href="#" class="task__remove">&times;</a>'
  );
  tasksList.appendChild(newTask);
  taskRemove();
  e.preventDefault();
});
const taskRemove = function () {
  const toRemove = document.querySelectorAll(".task__remove");
  toRemove[toRemove.length - 1].addEventListener("click", (e) => {
    e.currentTarget.parentElement.remove();
  });
};
