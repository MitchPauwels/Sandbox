//Create element
const newImg = document.createElement("img");
// Add Image Source
newImg.src =
  "https://images.unsplash.com/photo-1671533552224-b4b33bcee011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80";
// Add element/image to the DOM
document.body.appendChild(newImg);
// Add a class to the image
newImg.classList.add("square");

// Creating h3 element
const newH3 = document.createElement("h3");
// Adding text to h3 element
newH3.textContent = "I am new!";
// Adding h3 to the page
document.body.appendChild(newH3);

// Select P element
const p = document.querySelector("p");
// Append text to p element which shows up at the very end.
p.append("some text that I am appending");

//Create b element
const newB = document.createElement("b");
// Add text to b element
newB.append("adding some text");
// Adding b element to beginner of p element
p.prepend(newB);

// Adding element between h1 and image
const newH2 = document.createElement("h2");
newH2.textContent = "Top Title";
const h1El = document.querySelector("h1");
//beforebegin
//afterend
//afterbegin
//afterend
// h1El.insertAdjacentElement("afterend", newH2); // After title
// h1El.insertAdjacentElement("afterbegin", newH2); // Before title

//=====after()=======
h1El.after(newH2);
h1El.before(newH2);

// With text
h1El.after(newH2, "Text after h2");
