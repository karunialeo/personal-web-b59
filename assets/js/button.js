const button = document.querySelector("#testButton");

button.addEventListener("click", updateName);

function updateName(e) {
  console.log(e);
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
