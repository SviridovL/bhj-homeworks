const quantityInc = document.querySelectorAll(".product__quantity-control_inc");
quantityInc.forEach((element) => {
  element.addEventListener("click", (e) => {
    const quantityValue = element
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");
    let quantityValueText = +quantityValue.textContent + 1;
    quantityValue.textContent = quantityValueText;
  });
});

const quantityDec = document.querySelectorAll(".product__quantity-control_dec");
quantityDec.forEach((element) => {
  element.addEventListener("click", (e) => {
    const quantityValue = element
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");
    let quantityValueText = +quantityValue.textContent - 1;
    if (quantityValueText < 1) {
      quantityValueText = 1;
    }
    quantityValue.textContent = quantityValueText;
  });
});

const productAdd = document.querySelectorAll(".product__add");
productAdd.forEach((element) => {
  element.addEventListener("click", (e) => {
    const productId = element.closest(".product").getAttribute("data-id");
    const productImg = element
      .closest(".product")
      .querySelector(".product__image")
      .getAttribute("src");
    const productCount = element
      .closest(".product__quantity")
      .querySelector(".product__quantity-value").innerText;
    let cartProductAdd = document.querySelector(
      '.cart__product[data-id="' + productId + '"]'
    );
    console.log(cartProductAdd);
    if (!cartProductAdd) {
      const cartProduct = document.createElement("div");
      cartProduct.setAttribute("data-id", productId);
      cartProduct.className = "cart__product";
      const cartImage = document.createElement("img");
      cartImage.setAttribute("src", productImg);
      cartImage.className = "cart__product-image";
      let cartCount = document.createElement("div");
      cartCount.className = "cart__product-count";
      cartCount.innerText = productCount;
      const cartProducts = document.querySelector(".cart__products");
      cartProducts.appendChild(cartProduct);
      cartProduct.appendChild(cartImage);
      cartProduct.appendChild(cartCount);
    } else {
      let tmpValue = document.querySelector(
        '.product[data-id="' + productId + '"]'
      );
      console.log(tmpValue);
      cartProductAdd
        .closest(".cart__product")
        .querySelector(".cart__product-count").innerText = tmpValue
        .closest(".product")
        .querySelector(".product__quantity-value").innerText;
    }
  });
});

// const quantityInc = document.querySelectorAll(
//   ".product__quantity-control_inc"
// );
quantityInc.forEach((element) => {
  element.addEventListener("click", (e) => {
    let idSearch = element.closest(".product").getAttribute("data-id");

    let cartProductAdd = document.querySelectorAll(".cart__product");
    const quantityValue = element
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");
    cartProductAdd.forEach((el) => {
      console.log("dataset.id" + el.dataset.id);
      if (el.dataset.id === idSearch) {
        let temp = el
          .closest(".cart__product")
          .querySelector(".cart__product-count");
        temp.textContent = quantityValue.textContent;
      }
    });
  });
});

// quantityInc = document.querySelectorAll(
//   ".product__quantity-control_inc"
// );
quantityDec.forEach((element) => {
  element.addEventListener("click", (e) => {
    let idSearch = element.closest(".product").getAttribute("data-id");

    let cartProductAdd = document.querySelectorAll(".cart__product");
    const quantityValue = element
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");
    cartProductAdd.forEach((el) => {
      console.log("dataset.id" + el.dataset.id);
      if (el.dataset.id === idSearch) {
        let temp = el
          .closest(".cart__product")
          .querySelector(".cart__product-count");
        temp.textContent = quantityValue.textContent;
      }
    });
  });
});
