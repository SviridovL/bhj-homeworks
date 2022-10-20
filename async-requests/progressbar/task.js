const form = document.getElementById("form");
let file;
const btn = document.getElementById("send");
const fileUpload = document.getElementById("file");
const progressBar = document.getElementById("progress");
function loadHandler(event) {
  progressBar.setAttribute("value", 0);
  alert("Done!");
}
function progressHandler(event) {
  const percentLoaded = event.loaded / event.total;
  progressBar.setAttribute("value", percentLoaded);
}

fileUpload.addEventListener("change", () => {
  file = fileUpload.files[0];
});
btn.addEventListener("click", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  formData.append("file", file);
  const xhr = new XMLHttpRequest();
  xhr.upload.addEventListener("progress", progressHandler, false);
  xhr.upload.addEventListener("loadend", loadHandler, false);

  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  xhr.setRequestHeader("Content-Type", "multipart/form-data");

  xhr.onreadystatechange = function () {
    if ((this.readyState === xhr.DONE) & (this.status === 200)) {
    }
  };

  xhr.send(formData);
});
