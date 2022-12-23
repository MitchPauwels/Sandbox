const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

function colorize() {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}

const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
const h1 = document.querySelectorAll("h1");

for (let button of buttons) {
  button.addEventListener("click", colorize);
}

for (let el of h1) {
  el.addEventListener("click", colorize);
}
