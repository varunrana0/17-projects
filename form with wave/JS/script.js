const labels = document.querySelectorAll(".form-box label");
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay: ${idx * 80}ms">${letter}</span>`
    )
    .join("");
});
console.log(labels);
