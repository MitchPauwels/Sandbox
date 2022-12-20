const secret = "hippo";
let guess = prompt("What's the password?");

while (guess !== secret) {
  if (guess == "password") {
    alert("secret password discovered");
  } else {
    prompt("Incorrect! What's the password?");
  }
  break;
}

alert("Access Granted");
