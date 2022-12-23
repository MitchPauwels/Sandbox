const button = document.querySelector("button");

// Add an eventListener
// AddEventListener Option that removes the listener once activated/init -> after 1 click.
button.addEventListener("click", shout, { once: true });

function shout() {
  console.log("AAAAAAAAAH");
}
