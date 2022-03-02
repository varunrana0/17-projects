const gram = document.querySelector(".weightGram");
const pound = document.querySelector(".weightPound");
const ounce = document.querySelector(".weightOnce");
const inputNumber = document.querySelector(".inputNumber");

inputNumber.addEventListener("input", getWeight);

function getWeight() {
  let numberValue = inputNumber.value;
  if (numberValue === "") {
    gram.textContent = "";
    pound.textContent = "";
    ounce.textContent = "";
    return;
  } else {
    gram.textContent = ` ${numberValue * 1000} gram`;
    pound.textContent = `${(numberValue * 2.2).toFixed(2)}  pound`;
    ounce.textContent = `${(numberValue * 35.27).toFixed(2)}  ounce`;
  }
}

// new TypeIt("#element", {
//   strings: ["Check Your Weight!", "Don't Hasitate"],
//   startDelay: 600,
//   breakLines: true,
//   cursorSpeed: 40,
//   speed: 75,
//   loop: true,
// }).go();

new TypeIt("#element", {
  speed: 100,
  waitUntilVisible: true,
})
  .type("Cheiick", { delay: 300 })
  .move(-2)
  .delete(2)
  .move(null, { to: "END" })
  .type(" our", { delay: 400 })
  .move(-3)
  .type("Y")
  .move(null, { to: "END" })
  .type(" Wigt", { delay: 400 })
  .move(-1)
  .type("h")
  .move(-3)
  .type("e")
  .move(null, { to: "END" })
  .go();
