const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
    console.log("Start");
    setTimeout(() => console.log("Delayed"), 1000);
    console.log("End");  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
