// sportwear card
const sportswearCardOne = document.getElementById("sportswear-card-one");
const sportswearCardTwo = document.getElementById('sportswear-card-two');

// apply coupon button
const btnApply = document.getElementById('apply');
// purchase button
const btnPurchase = document.getElementById("purchase");
// go home button
const btnGoHome = document.getElementById("go-home");

// sportwear section card event listener
sportswearCardOne.addEventListener("click", function () {
  const productPrice = getProductPrice("sports-cap");
  addProductPrice(productPrice);
});

sportswearCardTwo.addEventListener('click', function(){
    const productPrice = getProductPrice("jersey-set");
  addProductPrice(productPrice);
})


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

// setElement Inner Text
function setElementInnerText(elementId, price) {
  const element = document.getElementById(elementId);
  element.innerText = price;
}

// reset everything

btnGoHome.addEventListener("click", function () {
  window.location.href = "/index.html";
});
