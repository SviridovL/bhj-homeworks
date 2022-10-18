const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.responseType = "text";
xhr.onreadystatechange = function () {
  if ((this.readyState === xhr.DONE) & (this.status == 200)) {
    let data = JSON.parse(this.responseText);
    const poll = document.createElement("div");
    poll.className = "poll";
    const pollTitle = document.createElement("div");
    pollTitle.className = "poll__title";
    pollTitle.id = "poll__title";
    const pollTitleText = data.data.title;

    pollTitle.textContent = pollTitleText;
    poll.appendChild(pollTitle);
    const card = document.querySelector(".card");
    card.appendChild(poll);
    const pollAnswers = document.createElement("div");
    pollAnswers.className = "poll__answers, poll_answers_active";
    pollAnswers.id = "poll__answers";
    poll.appendChild(pollAnswers);
    data.data.answers.forEach((element) => {
      const pollBtn = document.createElement("button");
      pollBtn.textContent = element;
      pollAnswers.appendChild(pollBtn);
      pollBtn.addEventListener("click", () => {
        const vote = data.id;
        const answer = data.data.answers.indexOf(element);
        alert("Спасибо, ваш голос засчитан");
        xhr.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
        xhr.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
        );
        xhr.send(`vote=${vote}&answer=${answer}`);
        xhr.onreadystatechange = function () {
          if ((this.readyState === xhr.DONE) & (this.status == 200)) {
            const dataNew = JSON.parse(this.responseText);

            const pollNew = document.createElement("div");
            pollNew.className = "poll__new";
            const pollTitleNew = document.createElement("div");
            pollTitleNew.className = "poll__title";
            pollTitleNew.id = "poll__title";
            const pollTitleTextNew = data.data.title;
            pollTitleNew.textContent = pollTitleTextNew;
            pollNew.appendChild(pollTitleNew);
            const card = document.querySelector(".card");
            card.appendChild(pollNew);
            const pollAnswersNew = document.createElement("div");
            pollAnswersNew.className = "poll__answers, poll_answers_active";
            pollAnswersNew.id = "poll__answers_new";
            pollNew.appendChild(pollAnswersNew);
            let sumVotes = 0;
            dataNew.stat.forEach((el) => {
              sumVotes = sumVotes + el.votes;

              return sumVotes;
            });
            dataNew.stat.forEach((element) => {
              let resultVotes = (element.votes / sumVotes) * 100;
              resultVotes = resultVotes.toFixed(1);
              const statAnswer = document.createElement("div");
              const elementAnswer = document.createElement("span");
              elementAnswer.className = "element__answer";
              const elementResultVote = document.createElement("span");
              elementResultVote.className = "element__result_vote";
              statAnswer.appendChild(elementAnswer);
              statAnswer.appendChild(elementResultVote);
              elementAnswer.textContent = `${element.answer}`;
              elementResultVote.textContent = `:${resultVotes}%`;
              pollAnswersNew.appendChild(statAnswer);
            });
          }
        };
      });
    });
  } else {
    if (this.status > 200) {
      throw new Error("Ошибка" + this.status);
    }
  }
};
xhr.send();
