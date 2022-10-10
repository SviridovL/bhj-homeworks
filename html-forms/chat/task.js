const chatWidget = document.querySelector(".chat-widget");
chatWidget.addEventListener("click", () => {
  chatWidget.classList.add("chat-widget_active");
});
const messageInput = document.querySelector("#chat-widget__input");
messageInput.addEventListener("change", () => {
  const messageText = messageInput.value;
  messageInput.value = "";
  const time = new Date();
  const timeStr = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const messages = document.querySelector(".chat-widget__messages");
  messages.innerHTML += `Сообщение от клиента
  <div class="message message_client">
    <div class="message__text">
     ${messageText}
    </div>
     <div class="message__time">${timeStr}</div>
  </div>
`;
  const robotAnswer = function () {
    const answer = [
        "Здорово боярин!",
        "Как дела?",
        "Ты здесь еще?",
        "Чего надобно старче?",
        "Ждите...Ждите...Ждите",
        "Уже бегу милок",
        "Hello my friend",
      ],
      index = Math.floor(Math.random() * answer.length);

    return answer[index];
  };
  messages.innerHTML += `
Сообщение от робота
<div class="message">
<div class="message__text">
 ${robotAnswer()}
</div>
 <div class="message__time">${timeStr}</div>
</div>
`;
});
