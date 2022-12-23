// event object automatically passed into callback
// logging evt object to see what it contains
document.querySelector("button").addEventListener("click", function (evt) {
  console.log(evt);
});

window.addEventListener("keydown", function (e) {
  //   console.log(e.code);
  //   console.log(e.key); // the character of the key
  // console.log(e.code); // The physical location of the key on the keyboard
  switch (e.code) {
    case "ArrowUp":
      console.log(e.code);
      break;
    case "ArrowDown":
      console.log(e.code);
      break;
    case "ArrowLeft":
      console.log(e.code);
      break;
    case "ArrowRight":
      console.log(e.code);
      break;
    default:
      console.log("ignored");
      break;
  }
});
