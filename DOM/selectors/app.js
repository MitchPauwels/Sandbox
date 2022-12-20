// Selects html tag as HTML collection
// You can itterate through the collection
// You can selec tthe index and see the length
document.getElementsByTagName;

// Also an html collection
// You can itterate through the collection
// You can selec tthe index and see the length
document.getElementsByClassName;

// ---- Examples -----
const allImages = document.getElementsByTagName("img");
// Change all img width to 50%
for (let img of allImages) {
  img.style.width = "50%";
}
// Change all img to become a specific image
for (let img of allImages) {
  img.src =
    "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ix…1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
}

const square = document.getElementsByClassName("square");
console.log(square);

for (let img of square) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg";
}

// The better way of selecting elements
document.querySelector;

// === BY TAGS ====
document.querySelector("p");
// If you select a tag '<p>' only the first element with that tag is selected instead of an html collection.

// === BY ID ====
document.querySelector("#banner");
// Same as 'document.getElementByID' you just write it with an # in front of the keyword to identify it as an ID.

// === BY CLASS ====
document.querySelector(".square");
// If you select a class '<.square>' only the first element with that class is selected instead of an html collection.
// you just write it with a . in front of the keyword to identify it as a class.

// === MULTIPLE AND SPECIFIC SELECTORS ====
document.querySelector("img:nth-of-type(2)");
// Here it would select the second occurence of the img tag.

document.querySelector("a[title='Java']");
// selecting by attribute []

// === SELECTING COLLECTION ====
document.querySelectorAll;
// Selects all elements with the tag / class / attribute etc.. as a node collection.

// ---- Examples -----
document.querySelectorAll("p a");
// Selecting all 'a' that are within a 'p'

const links = document.querySelectorAll("p a");
for (let link of links) {
  console.log(link.href);
}
