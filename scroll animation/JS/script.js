const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", update);
function update() {
  let load = window.innerHeight - 90;

  boxes.forEach((box) => {
    const loader = box.getBoundingClientRect().top;

    if (loader < load) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
update();
