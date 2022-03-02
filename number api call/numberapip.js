// function getOpenhour

const inputName = document.querySelector(".inputText");
const showText = document.querySelector(".text");
inputName.addEventListener("input", getTextFetch);

function getTextFetch() {
  let NameInput = inputName.value;

  fetch("http://numbersapi.com/" + NameInput)
    .then((response) => response.text())
    .then((data) => {
      if (NameInput != "") {
        showText.innerText = data;
      }
    })
    .catch((e) => console.log(e));
}
//   // XHR request

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "http://numbersapi.com/random/year" + NameInput);

// xhr.onload = function () {
//   if (this.status == 200 && NameInput != "") {
//     showText.innerText = this.responseText;
//   }
// };
// xhr.send();
