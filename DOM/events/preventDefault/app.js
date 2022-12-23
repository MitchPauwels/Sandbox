// Prevent default behaviour of submitting a form
// The behaviour is changing to page to where you are sending the data

const form = document.querySelector("#shelterForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
