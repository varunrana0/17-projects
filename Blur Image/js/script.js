// run load function in browser
const loading = document.querySelector(".load");
const image = document.querySelector(".image");

let loads = 0;

let Int = setInterval(blurred, 30);

function blurred() {
  loads++;

  if (loads > 99) {
    clearInterval(Int);
  }

  loading.innerText = `${loads}%`;
  loading.style.opacity = scale(loads, 0, 100, 1, 0);

  image.style.filter = `blur(${scale(loads, 0, 100, 30, 0)}px)`;
}

const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
