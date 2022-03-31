const deck = [
    {
        value : 2,
        cardnumber : '2',
        cardsuit : 'd',
    },
]

const playerAmount = document.querySelector('.player-amount')
const dealerAmount = document.querySelector('.dealer-amount')

var dealer = 0;
var player = 0;

const totalWins = document.querySelector('.win-amount')
const totalTies = document.querySelector('.tie-amount')
const totalLoss = document.querySelector('.loss-amount')

var playerScore = 0;
var dealerScore = 0;
var ties = 0;

function hit() {
    if (dealer == 0) {
        player = Math.floor(Math.random()*10 + 1);
        dealer = Math.floor(Math.random()*10 + 1); 
        playerAmount.innerHTML = player;
        dealerAmount.innerHTML = dealer;
    } else if (dealer != 0 && player < 21) {
        console.log('hitagain')
        player = player + Math.floor(Math.random()*10 + 1);
        playerAmount.innerHTML = player;
    }
    checkPlayer();
}

const endtext = document.querySelector('.endtext');

function checkPlayer() {
    if (player == 21) {
        stay();
    } else if (player > 21) {
        endtext.innerHTML = 'You Lose!'
        gameend.classList.remove('hidden')
        dealerScore = dealerScore + 1;
        totalLoss.innerHTML = dealerScore;
    }
}

const gameend = document.querySelector('.gameend')

function playAgain() {
    player = 0;
    dealer = 0;
    playerAmount.innerHTML = player;
    dealerAmount.innerHTML = dealer;
    gameend.classList.add('hidden');
}



function stay() {
    if (dealer == 0) {
        console.log('return')
        return
    } else if (dealer < 21 && dealer <= player) {
        console.log('stay')
        dealer = dealer + Math.floor(Math.random()*10 + 1);
        dealerAmount.innerHTML = dealer;
        checkDealer();       
    }
}


function checkDealer() {
    if (dealer > 21) {
        endtext.innerHTML = 'You Win!'
        gameend.classList.remove('hidden')
        playerScore = playerScore + 1;
        totalWins.innerHTML = playerScore;
    } else if (dealer > player) {
        endtext.innerHTML = 'You Lose!'
        gameend.classList.remove('hidden')
        dealerScore = dealerScore + 1;
        totalLoss.innerHTML = dealerScore;
    } else if (dealer < player) {
        stay();
    } else if (dealer == 21 && player == 21) {
        endtext.innerHTML = "It's a Tie!"
        gameend.classList.remove('hidden')
        ties = ties + 1;
        totalTies.innerHTML = ties;
    }
}





// reset score

const resetButton = document.querySelector('.reset')

function resetScore() {
    playerScore = 0;
    dealerScore = 0;
    ties = 0;
    totalWins.innerHTML = playerScore;
    totalLoss.innerHTML = dealerScore;
    totalTies.innerHTML = ties;
}