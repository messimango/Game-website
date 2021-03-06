const games = [    
    {
        id: 9,
        name: "Momo Clicker",
        image: "./images/momoClicker.png",
        link: "./MomoClicker/momo.html",
        description: "An idle clicker game. Start you momo empire and take over the world.",
    },
    {
        id: 8,
        name: "Tetris",
        image: "./images/tetris.png",
        link: "./Tetris/tetris.html",
        description: "The classic game of tetris, the game has a simple goal of destroying lines of block before it reaches the top.",
    },     
    {
        id: 5,
        name: "One Piece Card Match",
        image: "./images/OPcards.png",
        link: "./CardMatch/card.html",
        description: "A card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.",
    },    
    {
        id: 2,
        name: "Tic Tac Toe",
        image: "./images/tictac.PNG",
        link: "./TicTacToe/tictac.html",
        description: "Two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares.",
    },    
    {
        id: 7,
        name: "Pac Man",
        image: "",
        link: "./Pac-Man/pacman.html",
        description: "The classic game of Pac-Man. Eat coins and run or fight the ghosts",
    },    
    {
        id: 1,
        name: "Snake",
        image: "./images/snake.png",
        link: "./snake/snake.html",
        description: "Controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up apples, trying to avoid hitting its own body or the edges of the playing area.",
    },
    {
        id: 3,
        name: "Rock Paper Scissor",
        image: "./images/RPS.PNG",
        link: "./RockPaperScissors/rps.html",
        description: "Play a classic game of Rock Paper Scissors",
    },
    {
        id: 10,
        name: "BlackJack",
        image: "./images/blackjack.png",
        link: "./Blackjack/blackjack.html",
        description: "Play the card game Blackjack.",
    }, 
    {
        id: 4,
        name: "Dropper",
        image: "./images/dropper.png",
        link: "./Drop/drop.html",
        description: "A ball in freefall must avoid to roof and fall through the cracks in the floor.",
    },
    {
        id: 6,
        name: "Jumper",
        image: "./images/jumper.png",
        link: "./Jumper/jumper.html",
        description: "Jump over block coming at you at high speeds",
    },  
];

const gameList = document.querySelector(".gamelist")

window.addEventListener("DOMContentLoaded", function() {
    displayGames(games)
})

function displayGames(gameInfo) {
    let displayGames = gameInfo.map(function (info) {
        return `<div class="game">
        <a href="${info.link}"><img src="${info.image}" alt="${info.name}" class="photo"></a>
        <h1 class="game-name">${info.name}</h1>
        <div class="game-info">                    
            <p class="discription">${info.description}</p>
        </div>
        </div>`;
    });
    displayGames = displayGames.join("");
    gameList.innerHTML = displayGames;
}