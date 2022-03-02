const open = document.querySelector("#open");
const close = document.querySelector("#close");
const container = document.querySelector("#container");

open.addEventListener("click", function () {
  container.classList.add("active");
  container.style.transition = "all 0.4s linear";
});
close.addEventListener("click", function () {
  container.classList.remove("active");
  container.style.transition = "all 0.4s linear";
});
