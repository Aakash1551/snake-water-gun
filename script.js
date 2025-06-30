let score = 0;

const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");
const computerEl = document.getElementById("computer");
const youEl = document.getElementById("you");
const choices = document.querySelectorAll(".choice");

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const playerChoice = parseInt(choice.dataset.choice);
    playRound(playerChoice);
  });
});

function playRound(playerChoice) {
  disableChoices();

  const computerChoice = Math.floor(Math.random() * 3) + 1;

  showChoice(playerChoice, youEl);
  showChoice(computerChoice, computerEl);

  const result = getResult(playerChoice, computerChoice);
  updateMessage(result);
  updateScore(result);

  setTimeout(() => enableChoices(), 1000);
}

function showChoice(choice, element) {
  let icon = "", label = "", color = "";
  if (choice === 1) { icon = "🐍"; label = "SNAKE"; color = "lime"; }
  else if (choice === 2) { icon = "💧"; label = "WATER"; color = "deepskyblue"; }
  else if (choice === 3) { icon = "🔫"; label = "GUN"; color = "lightgray"; }

  element.innerHTML = `${icon}<br>${label}`;
  element.style.color = color;
  element.classList.remove("animate");
  void element.offsetWidth; // restart animation
  element.classList.add("animate");
}

function getResult(player, comp) {
  if (player === comp) return "draw";
  if (
    (player === 1 && comp === 2) || 
    (player === 2 && comp === 3) || 
    (player === 3 && comp === 1)
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function updateMessage(result) {
  messageEl.className = "message";
  if (result === "draw") {
    messageEl.textContent = "It's a Draw! 🤝";
    messageEl.classList.add("draw");
  } else if (result === "win") {
    messageEl.textContent = "You Won! 🎉";
    messageEl.classList.add("win");
  } else {
    messageEl.textContent = "You Lost! 😢";
    messageEl.classList.add("lose");
  }
}

function updateScore(result) {
  if (result === "win") score++;
  else if (result === "lose") score--;
  scoreEl.textContent = `Score: ${score}`;
}

function disableChoices() {
  choices.forEach(choice => choice.classList.add("disabled"));
}

function enableChoices() {
  choices.forEach(choice => choice.classList.remove("disabled"));
}
