const calculateBtn = document.querySelector("#btn");
const resetBtn = document.querySelector("#reset");
calculateBtn.addEventListener("click", BMIcalculate);

function BMIcalculate() {
  const weight = document.querySelector("#weight").value;
  const height = document.querySelector("#height").value;
  const result = document.querySelector(".result");
  if (weight === "" || isNaN(weight)) {
    result.innerHTML = "provide a valid Weight";
  } else if (height === "" || isNaN(height)) {
    result.innerHTML = "provide a valid Height";
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `your BMI:- ${bmi} mass index`;
  }
}

resetBtn.addEventListener("click", function () {
  height.value = "";
  weight.value = "";
});
