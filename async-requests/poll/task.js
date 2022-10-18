const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.responseType = "text";
xhr.onreadystatechange = function () {
  if ((this.readyState === xhr.DONE) & (this.status == 200)) {
    let data = JSON.parse(this.responseText);
    console.log(data);

    const poll = document.createElement("div");
    poll.className = "poll";
    const pollTitle = document.createElement("div");
    pollTitle.className = "poll__title";
    pollTitle.id = "poll__title";
    const pollTitleText = data.data.title;
    console.log(pollTitleText);
    pollTitle.textContent = pollTitleText;
    const pollAnswers = document.createElement("div");
    pollAnswers.className = "poll__answers, poll_answers_active";
    pollAnswers.id = "poll__answers";
    const card = document.querySelector(".card");
    poll.appendChild(pollTitle);
    poll.appendChild(pollAnswers);
    card.appendChild(poll);
    data.data.answers.forEach((element) => {
      const pollBtn = document.createElement("button");
      pollBtn.textContent = element;
      pollAnswers.appendChild(pollBtn);
      pollBtn.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан");
      });
    });
  } else {
    //throw new Error("Ошибка" + this.status);
  }
};
xhr.send();
