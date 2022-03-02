const penals = document.querySelectorAll(".penal");

penals.forEach((penal) => {
  penal.addEventListener("click", () => {
    RemoveActiveClasses();
    penal.classList.add("active");
  });
});

function RemoveActiveClasses() {
  penals.forEach((penal) => {
    penal.classList.remove("active");
  });
}
