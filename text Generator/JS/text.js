const text = document.querySelector(".text");
const result = document.querySelector(".result");

text.addEventListener("input", function () {
  const textValue = Array.from(text.value).map((value, index) => {
    if (index % 2) {
      // let newValue = value.replace(value, character);
      return value.toUpperCase();
    }

    return value.toLowerCase();
  });

  result.innerHTML = textValue.join("");
});

window.addEventListener("load", function () {
  text.value = "";
});
