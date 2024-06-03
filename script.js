function signUp() {
  let name = prompt("What is your name?");
  let age = prompt("How old are you?");
  if (age >= 18) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Welcome to SheCodes " + name;
  } else {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Sorry" + " " + name + "," + " you cannot join SheCodes.";
  }
}
