let scoreElement = document.getElementById("score");
let messageElement = document.getElementById("message");
let score = 0;

function main(playerChoice) {
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    displayChoice(computerChoice, "computer");
    displayChoice(playerChoice, "you");

    messageElement.className = "message"; // Reset

    if (playerChoice === computerChoice) {
        messageElement.textContent = "It's a Draw! 🤝";
        messageElement.classList.add("draw");
    } else if (playerLost(playerChoice, computerChoice)) {
        messageElement.textContent = "You Lost! 😢";
        messageElement.classList.add("lose");
        score--;
    } else {
        messageElement.textContent = "You Won! 🎉";
        messageElement.classList.add("win");
        score++;
    }

    scoreElement.textContent = `Score: ${score}`;
}

function playerLost(player, computer) {
    return (player === 1 && computer === 2) || 
           (player === 2 && computer === 3) || 
           (player === 3 && computer === 1);
}

function displayChoice(choice, targetId) {
    const target = document.getElementById(targetId);
    
    switch (choice) {
        case 1:
            target.innerHTML = "🐍<br>SNAKE";
            target.style.color = "lime";
            break;
        case 2:
            target.innerHTML = "💧<br>WATER";
            target.style.color = "deepskyblue";
            break;
        case 3:
            target.innerHTML = "🔫<br>GUN";
            target.style.color = "lightgray";
            break;
    }
}
