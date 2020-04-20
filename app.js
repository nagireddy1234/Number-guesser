/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

let min = 1,
    max = 10,
    guessNum = getRandomNum(min, max),
    guessLeft = 3;


const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-value"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");


minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener("mousedown", function(e){
  if(e.target.className === "play-again"){
    window.location.reload();
  }
});

guessBtn.addEventListener("click", function (){
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  if (guess === guessNum) {

    gameOver(true, `${guessNum} is correct, You Win!`);

  } else {
    guessLeft -=1;
    if (guessLeft === 0) {
      gameOver(false, `Game Over, You lost. The correct number was ${guessNum}`);
    } else {
      guessInput.style.borderColor = "red";
      guessInput.value = "";

      setMessage (`${guess} is not correct, ${guessLeft} guesses left`, "red");
    }
  }

});

function gameOver (won, msg) {
  let color;
  won === true ? color = "green" : color = "red";

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;

    setMessage(msg);

  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";

};

function getRandomNum (min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
};

function setMessage (msg, color) {
  message.style.color = color;
  message.textContent = msg;
};
