let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.responseType = "text";

const loader = document.getElementById("loader");
loader.classList.add("loader_active");
xhr.onreadystatechange = function () {
  if ((this.readyState === xhr.DONE) & (this.status == 200)) {
    let data = JSON.parse(this.responseText);

    let newData = Object.entries(data.response.Valute);
    const items = document.getElementById("items");
    for (let i = 0; i < newData.length; i++) {
      const card = document.createElement("div");
      card.className = "item";
      let itemCode = document.createElement("div");
      itemCode.className = "item__code";
      itemCode.innerText = newData[i][1].CharCode;
      card.appendChild(itemCode);
      let itemValue = document.createElement("div");
      itemValue.className = "item__value";
      itemValue.innerText = newData[i][1].Value;
      card.appendChild(itemValue);
      let itemCurrency = document.createElement("div");
      itemCurrency.className = "item__currency";
      itemCurrency.innerText = "руб.";
      card.appendChild(itemCurrency);
      items.appendChild(card);
    }
  }
  loader.classList.remove("loader_active");
};
xhr.send();
