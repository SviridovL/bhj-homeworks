if (localStorage.user_id) {
  const signin = document.getElementById("signin");
  signin.classList.remove("signin_active");
  const welcome = document.getElementById("welcome");
  welcome.classList.add("welcome_active");
  const user = localStorage.getItem("user_id");
  const user_id = document.getElementById("user_id");
  user_id.innerText = user;
} else {
  const signin = document.getElementById("signin");
  signin.classList.add("signin_active");
  const form = document.getElementById("signin__form");
  const btn = document.getElementById("signin__btn");
  btn.addEventListener("click", (e) => {
    const formData = new FormData(form);
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
      xhr.onreadystatechange = function () {
      if ((this.readyState === xhr.DONE) & (this.status === 200)) {
        const data = JSON.parse(this.responseText);
        if (data.success) {
          const user = data.user_id;
          localStorage.setItem("user_id", user);
          signin.classList.remove("signin_active");
          const welcome = document.getElementById("welcome");
          welcome.classList.add("welcome_active");
          const user_id = document.getElementById("user_id");
          user_id.innerText = user;
        } else {
          alert("Неверный логин/пароль");
        }
      }
    };
    xhr.send(formData);
  });
}
