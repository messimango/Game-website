const player = document.querySelector(".playerPick")
const computer = document.querySelector(".computerPick")
const choices = document.querySelectorAll(".choices a")
const messageText = document.querySelector(".message-text")
const tryAgain = document.querySelector(".try-again")

const tie = "It's a Tie";
const win = 'You Win <i class="fa fa-smile-o "></i>'
const lose = 'You Lose <i class="fa fa-frown-o"></i>'
var number
let playerChoice


choices.forEach(choice => choice.addEventListener('click', (e) => {
    playerChoice = e.target.id

    if (playerChoice == 'rock') {
        player.className = ""
        player.classList.add("fa")
        player.classList.add("fa-hand-rock-o")
    }
    else if (playerChoice == 'paper') {
        player.className = ""
        player.classList.add("fa")
        player.classList.add("fa-hand-paper-o")
    }
    else if (playerChoice == 'scissor') {
        player.className = ""
        player.classList.add("fa")
        player.classList.add("fa-hand-scissors-o")
    }

    computerChoice();
    
}));

function computerChoice() {
    var number = Math.random() * 3
    number = Math.floor(number)

    if (number === 0) {
        computer.className = ""
        computer.classList.add("fa")
        computer.classList.add("fa-hand-rock-o")
    }
    else if (number === 1) {
        computer.className = ""
        computer.classList.add("fa")
        computer.classList.add("fa-hand-paper-o")
    }
    else if (number == 2) {
        computer.className = ""
        computer.classList.add("fa")
        computer.classList.add("fa-hand-scissors-o")
    };

    // player chooses rock

    if (playerChoice == 'rock' && number === 0) {
        messageText.innerHTML = tie
    }
    else if (playerChoice == 'rock' && number === 1) {
        messageText.innerHTML = lose
    }
    else if (playerChoice == 'rock' && number === 2) {
        messageText.innerHTML = win
    }

    // player chooses paper

    if (playerChoice == 'paper' && number === 0) {
        messageText.innerHTML = win
    }
    else if (playerChoice == 'paper' && number === 1) {
        messageText.innerHTML = tie
    }
    else if (playerChoice == 'paper' && number === 2) {
        messageText.innerHTML = lose
    }

    // player chooses scissors

    if (playerChoice == 'scissor' && number === 0) {
        messageText.innerHTML = lose
    }
    else if (playerChoice == 'scissor' && number === 1) {
        messageText.innerHTML = win
    }
    else if (playerChoice == 'scissor' && number === 2) {
        messageText.innerHTML = tie
    }
    
}