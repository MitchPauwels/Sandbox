const bold = document.querySelector("b");
// bold.parentElement // <p>
// bold.parentElement.parentElement //body
const paragraph = bold.parentElement;

// paragraph.childElementCount // 8
// paragraph.children; // html collection
// paragraph.children[0]; // first element in the list
// paragraph.children[0].parentElement; // brings us back to the paragraph

const squareImg = document.querySelector(".square");
// nextSibling / previousSibling looks at the next node which could be a textnode containing a space

// nextElementSibling
squareImg.nextElementSibling; // next image
squareImg.previousElementSibling; // next image
