// Select ID and Change it
const myID = document.querySelector("#banner");
myID.id = "poop";

// Select tag and change attribute
const getAttribute = document.querySelector("a");
getAttribute.title = "durb";
getAttribute.href = "google.com";

// Methods to manipulate attributes
// setAttribute()
// getAttribute()

const getFirstLink = document.querySelector("a");
getFirstLink.getAttribute("href");
// retrieves the href attribute content(google.com) from the html itself.
// if you use getFirstLink.href, it will go through js and retrieve the filepath + link (computed value)

getFirstLink.setAttribute("href", "http://www.amazon.co.uk");
// setAttribute('which attribute','updated value')

// selecting and changing attribute types
const input = document.querySelector('input[type="text"]');

input.type = "password";
input.setAttribute("type", "text");
