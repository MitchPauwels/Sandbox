// Adding a class attribute
const h2 = document.querySelector("h2");
// h2.setAttribute("class", "purple");
// // let purple = h2.getAttribute("class");
// // Adding multiple classes
// h2.setAttribute("class", `purple border`);

// ====== ClassList =======
h2.classList.add("purple", "border");
// Adds classes
h2.classList.remove("border");
// Removes classes
h2.classList.contains("border"); // false
// true/ false whether the class exists
h2.classList.toggle("purple");
// add / remove the class when event gets triggered.
