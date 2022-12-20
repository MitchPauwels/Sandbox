// innerText
// innerHTML
// textcontent

const element = document.querySelector("p");

console.log(`innerText : ${element.innerText}`);
// Only shows the text (without the markup and weird spaces)
// Because of this, sometimes content can be missing.

// ==== Better to make use of : =====
console.log(`innerHTML : ${element.innerHTML}`);
// Shows everything including the markup (like looking at your html code)
console.log(`textContent : ${element.textContent}`);
// Provides you with the text without the markup
// The places that contained markup are now empty spaces.

// ---- Examples -----
const links = document.querySelectorAll("a");

// for (let link of links) {
//   link.textContent = "I AM A LINK";
// }
// for (let link of links) {
//   link.innerText = "I AM A LINK";
// }
// This will change the text content of the link

document.querySelector("h1").innerText = '<a href="#">Hello</a>';
// This will not change the markup
('<a href="#">Hello</a>');
document.querySelector("h1").textContent = '<a href="#">Hello</a>';
// This will not change the markup
('<a href="#">Hello</a>');
document.querySelector("h1").innerHTML = '<a href="#">Hello</a>';
('<a href="#">Hello</a>');
// This WILL  change the markup

document.querySelector("h1").innerHTML += "<sup>This Works</sup>";
// This will add <sup> inside of the h1
// <h1>
//      <a></a>
//      <sup></sup>
// </h1>

// innerHTML is great for adding new elements.
// textContent is great for when only text needs to be changed
