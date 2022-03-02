const gram = document.querySelector(".weightGram");
const pound = document.querySelector(".weightPound");
const ounce = document.querySelector(".weightOnce");
const inputNumber = document.querySelector(".inputNumber");

inputNumber.addEventListener("input", getWeight);

function getWeight() {
  let numberValue = inputNumber.value;
  if (numberValue === "") {
    gram.textContent = "";
    pound.textContent = "";
    ounce.textContent = "";
    return;
  } else {
    gram.textContent = ` ${numberValue * 1000} gram`;
    pound.textContent = `${(numberValue * 2.2).toFixed(2)}  pound`;
    ounce.textContent = `${(numberValue * 35.27).toFixed(2)}  ounce`;
  }
}
