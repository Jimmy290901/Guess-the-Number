let turn;
let value;
let correctValue;

const prevGuess = document.querySelector("#previous_guesses");
const result = document.querySelector("#result");
const message = document.querySelector("#message");
const inputValue = document.querySelector("#inputValue");
const submitBtn = document.querySelector("#submitBtn");
const restartBtn = document.querySelector("#restartBtn");

function new_game() {
  correctValue = Math.floor(Math.random() * 100 + 1);
  turn = 0;
  prevGuess.textContent = result.textContent = message.textContent = "";
  result.classList.remove("green-box", "red-box");
  restartBtn.style.display = "none";
  inputValue.disabled = false;
  submitBtn.disabled = false;
}

new_game();

submitBtn.addEventListener("click", function () {
  //get the value
  value = inputValue.value;
  inputValue.value = "";
  //update the turn
  turn++;
  //add the number to previous guess
  if (turn == 1) {
    prevGuess.textContent = "Previous Guess:";
  }
  prevGuess.textContent += " " + value;

  //compare the value
  if (value == correctValue) {
    console.log("Correct");
    result.textContent = "Correct!!!";
    result.classList.add("green-box");
    message.textContent = "";
    restartBtn.style.display = "block";
  } else if (value > correctValue) {
    console.log("Left");
    if (turn == 10) {
      result.textContent = "!!!GAME OVER!!!";
      restartBtn.style.display = "block";
      inputValue.disabled = true;
      submitBtn.disabled = true;
    } else {
      result.textContent = "Wrong!";
      message.textContent = "Value is too high";
    }
    result.classList.add("red-box");
  } else {
    console.log("Right");
    if (turn == 10) {
      result.textContent = "!!!GAME OVER!!!";
      restartBtn.style.display = "block";
      inputValue.disabled = true;
      submitBtn.disabled = true;
    } else {
      result.textContent = "Wrong!";
      message.textContent = "Value is too low";
    }
    result.classList.add("red-box");
  }
});

//on new game button, add event listener with new_game callback
restartBtn.addEventListener("click", new_game);
