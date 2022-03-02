const btn = document.getElementById("btn");
const search = document.getElementById("search");
const input = document.querySelector(".input");

// for search button
btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

// toggle the content section for practice //
const button = document.querySelectorAll(".button");

button.forEach((btns) =>
  btns.addEventListener("click", (e) => {
    const parent = e.target.parentElement;
    parent.classList.toggle("active");
  })
);
