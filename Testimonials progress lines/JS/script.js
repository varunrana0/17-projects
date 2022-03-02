const progress = document.querySelector(".progress-line");
const Prev = document.querySelector("#prev");
const Next = document.querySelector("#next");
const testimonial = document.querySelectorAll(".testimonial");

let count = 0;

Next.addEventListener("click", () => {
  count++;

  if (count > testimonial.length) {
    count = testimonial.length;
  }
  update();
});

Prev.addEventListener("click", () => {
  count--;

  if (count < 0) {
    count = 0;
  }
  update();
});

function update() {
  testimonial.forEach((testi, idx) => {
    if (idx < count) {
      testi.classList.add("active");
    } else {
      testi.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (testimonial.length - 1)) * 100 + "%";

  if (count === 0) {
    Prev.disabled = true;
  } else if (count === testimonial.length) {
    Next.disabled = true;
  } else {
    Prev.disabled = false;
    Next.disabled = false;
  }
}
