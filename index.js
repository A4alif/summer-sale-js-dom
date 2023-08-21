// sportwear card
const sportswearCardOne = document.getElementById("sportswear-card-one");
const sportswearCardTwo = document.getElementById("sportswear-card-two");
const sportswearCardThree = document.getElementById("sportswear-card-three");

// furniture card
const furnitureCardOne = document.getElementById("furniture-card-one");
const furnitureCardTwo = document.getElementById("furniture-card-two");
const furnitureCardThree = document.getElementById("furniture-card-three");

// apply coupon button
const btnApply = document.getElementById("apply");
// purchase button
const btnPurchase = document.getElementById("purchase");
// go home button
const btnGoHome = document.getElementById("go-home");

// sportwear section card event listener
sportswearCardOne.addEventListener("click", function () {
  const productPrice = getProductPrice("sports-cap");
  addProductPrice(productPrice);
});

sportswearCardTwo.addEventListener("click", function () {
  const productPrice = getProductPrice("jersey-set");
  addProductPrice(productPrice);
});
sportswearCardThree.addEventListener("click", function () {
  const productPrice = getProductPrice("sports-cate");
  addProductPrice(productPrice);
});

// furniture section card event listener
furnitureCardOne.addEventListener("click", function () {
  const productPrice = getProductPrice("relax-chair");
  addProductPrice(productPrice);
});
furnitureCardTwo.addEventListener("click", function () {
  const productPrice = getProductPrice("play");
  addProductPrice(productPrice);
});
furnitureCardThree.addEventListener("click", function () {
  const productPrice = getProductPrice("sofa");
  addProductPrice(productPrice);
});

// get product price
function getProductPrice(elementID) {
  const productPriceText = document.getElementById(elementID).innerText;
  const productPrice = parseFloat(productPriceText);
  return productPrice;
}

// calculate total price
function addProductPrice(productPrice) {
  const totalPriceText = document.getElementById("total-price").innerText;
  const totalPriceNumber = parseFloat(totalPriceText);
  const totalPrice = totalPriceNumber + productPrice;
  const totalPriceTwoDecimal = totalPrice.toFixed(2);
  setElementInnerText("total-price", totalPriceTwoDecimal);
  if (totalPriceTwoDecimal > 0) {
    btnPurchase.disabled = false;
  }
  if (totalPriceTwoDecimal >= 200) {
    btnApply.disabled = false;
  }
}

// Coupon section
btnApply.addEventListener("click", function () {
  const couponInputField = document.getElementById("coupon-input");
  const couponInputValue = couponInputField.value;
  // totalPrice
  const totalPriceText = document.getElementById("total-price").innerText;
  const totalPriceNumber = parseFloat(totalPriceText);
  const discount = (totalPriceNumber * 20) / 100;
  const discountTwoDecimal = discount.toFixed(2);
  //    total
  const total = totalPriceNumber - discountTwoDecimal;
  const totalTwoDecimal = total.toFixed(2);
  let couponCode = "SELL200";
  if (couponInputValue === couponCode) {
    setElementInnerText("discount", discountTwoDecimal);
    setElementInnerText("total", totalTwoDecimal);
  } else {
    alert("Invalid Coupon Code");
  }
  //    clear input field
  couponInputField.value = "";
});

// setElement Inner Text
function setElementInnerText(elementId, price) {
  const element = document.getElementById(elementId);
  element.innerText = price;
}

// reset everything

btnGoHome.addEventListener("click", function () {
  window.location.href = "/index.html";
});
