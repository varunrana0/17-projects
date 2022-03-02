const time = document.querySelector("#time"),
  greeting = document.querySelector("#greeting"),
  name = document.querySelector("#name"),
  focus = document.querySelector("#focus");

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds();

  // get AM PM
  const AMPM = hour >= 12 ? "PM" : "AM";

  // 12 hour format
  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${showZero(
    minutes
  )}<span>:</span>${showZero(seconds)} ${AMPM}`;
  setTimeout(showTime, 1000);
}

// put 0 in front of seconds and minutes
function showZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
// set background acc to the time

function setBackground() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url(morning.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    greeting.textContent = `Good Morning`;
  } else if (hour > 12 && hour < 18) {
    document.body.style.backgroundImage = "url(afternoon.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    greeting.textContent = `Good AfterNoon`;
  } else {
    document.body.style.backgroundImage = "url(night.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    greeting.textContent = `Good Night`;
    document.body.style.color = `#fff`;
  }
}
// add effects on the span element

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml2 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".ml2",
    opacity: 0,
    duration: 1400,
    easing: "easeOutExpo",
    delay: 2000,
  });

function getItemm() {}

showTime();
setBackground();
