let putCurrencyValue = document.querySelector(".putValue");
let getCurrencyValue = document.querySelector(".getValue");
let selectItems = document.querySelector(".select-item");
const errorDisplay = document.querySelector(".result");
selectItems.addEventListener("change", SelectValue);

putCurrencyValue.addEventListener("input", () => {
  if (putCurrencyValue.value < 1) {
    putCurrencyValue.value = "";
  }
  SelectValue();
});

// select value from the value attribute to get the value...

function SelectValue() {
  if (selectItems[selectItems.selectedIndex].text === "USD") {
    getCurrencyValue.value = `${(putCurrencyValue.value * 73.49).toFixed(
      2
    )} INR`;
    errorDisplay.textContent = `${putCurrencyValue.value} ${
      selectItems[selectItems.selectedIndex].text
    }  = ${getCurrencyValue.value}`;
  } else if (selectItems[selectItems.selectedIndex].text === "AUD") {
    getCurrencyValue.value = `${(putCurrencyValue.value * 54.27).toFixed(
      2
    )} INR`;
    errorDisplay.textContent = `${putCurrencyValue.value} ${
      selectItems[selectItems.selectedIndex].text
    }  = ${getCurrencyValue.value}`;
  } else if (selectItems[selectItems.selectedIndex].text === "EUR") {
    getCurrencyValue.value = `${(putCurrencyValue.value * 86.27).toFixed(
      2
    )} INR`;
    errorDisplay.textContent = `${putCurrencyValue.value} ${
      selectItems[selectItems.selectedIndex].text
    }  = ${getCurrencyValue.value}`;
  } else if (selectItems[selectItems.selectedIndex].text === "YEN") {
    getCurrencyValue.value = `${(putCurrencyValue.value * 0.67).toFixed(
      2
    )} INR`;
    errorDisplay.textContent = `${putCurrencyValue.value} ${
      selectItems[selectItems.selectedIndex].text
    }  = ${getCurrencyValue.value}`;
  } else if (selectItems[selectItems.selectedIndex].text === "IDR") {
    getCurrencyValue.value = `${(putCurrencyValue.value * 195.29).toFixed(
      2
    )} INR`;
    errorDisplay.textContent = `${putCurrencyValue.value} ${
      selectItems[selectItems.selectedIndex].text
    }  = ${getCurrencyValue.value}`;
  } else if (selectItems[selectItems.selectedIndex].text === "GBR") {
    getCurrencyValue.value = ` ${(putCurrencyValue.value * 101.21).toFixed(
      2
    )}INR`;
    errorDisplay.textContent = `${putCurrencyValue.value} ${
      selectItems[selectItems.selectedIndex].text
    }  = ${getCurrencyValue.value}`;
  } else {
    return;
  }
}

//reset button to reset the value of inputs...

const resetEveryValue = document.querySelector(".reset");
resetEveryValue.addEventListener("click", function () {
  putCurrencyValue.value = "";
  getCurrencyValue.value = "";
  errorDisplay.textContent = "";
});

window.addEventListener("load", () => {
  putCurrencyValue.value = " ";
  errorDisplay.textContent = " ";
  getCurrencyValue.value = " ";
});
