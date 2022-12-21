// Changing css -> looks like inline css
const links = document.querySelectorAll("a");
for (let link of links) {
  link.style.color = "#006c68";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
  link.style.textDecorationThickness = "2px";
}

// finding out the properties of the css
// ----- example ------
const h1 = document.querySelector("h1");
window.getComputedStyle(h1).fontSize; //get fontsize
window.getComputedStyle(h1).color; // get color
window.getComputedStyle(h1).fontFamily; // get fontFamily

// Assign a color from the colors array to each letter of all the span elements

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:

const span = document.querySelectorAll("span");

let i = 0;

for (let el of span) {
  el.style.color = colors[i];
  i++;
}
